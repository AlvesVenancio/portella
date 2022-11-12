import React, {  useRef, useState } from 'react';
import { View, Text, FlatList, ListRenderItem, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as FileSystem from 'expo-file-system';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import Certificate from '../../components/Certificate';
import TextField from '../../components/TextField';
import api from '../../services/api';

import PdfViewer from '../../components/PdfViewer';
import FocusButton from '../../components/FocusButton';

        

type CertificatesData = {
    id: number;
    cert_name: string;
    slug: string;
    download_url: string;
    sales_order_code: string;
    icon: "download" | "view";
}


type CertFileProps = {
    id: number,
    url: string,
    cert_name: string,
    slug: string,
    icon?: string,
};

type RequestCertFileProps = (
    id: number,
    url: string,
    cert_name: string,
    slug: string,
    icon?: string,
) => void;


type FileStorageProps = {
    id: number;
    file: string;
    cert_name: string;
}


interface ItemCertificateProps {
    data: CertificatesData;
    handler: () => void;
    loading: boolean;
}



const storageKey = '@Portella:files';

const fileStorage = {
    getAll: async ( ): Promise<FileStorageProps[]> => {
        const data = await AsyncStorage.getItem(storageKey);
        return ! data ? null : JSON.parse(data);
    },
    getOne: async ( id: number ): Promise<FileStorageProps> => {
        const data = await AsyncStorage.getItem(storageKey);

        const ret =  ! data ? null : JSON.parse(data).filter( (x: FileStorageProps) => x.id == id );

        return ret && ret.length ? ret[0] : null;
    },
    set: async ( {id, file, cert_name}: FileStorageProps ) => {

        const newData = [{id, file, cert_name}];
        const getData = JSON.parse(await AsyncStorage.getItem(storageKey) ?? '[]')
        
        const data = [...getData, ...newData];

        await AsyncStorage.setItem( storageKey, JSON.stringify(data) );

    }
}


const Item = ({data, handler, loading}: ItemCertificateProps) => {


    return(
        <Certificate 
            key={data.id}
            onPress={handler}
            title={data.cert_name}
            cod={data.sales_order_code}
            icon={data.icon}
            loading={loading}
        />
    )
}

const Certificates = () => {

    const [search, setSearch] = useState<string>();
    const [searchFocus, setSearchFocus] = useState<boolean>(false);
    const [certificates, setCertificates] = useState<CertificatesData[]>([]);
    const [hasSearch, setHasSearch] = useState<boolean>(false);
    
    const [pdfIsOpen, setPdfIsOpen] = useState<boolean>(false);
    const [pdfTitle, setPdfTitle] = useState<string>('');
    const [pdfUri, setPdfUri] = useState<string>('');

    const [inProgress, setInProgress] = useState<Array<number>>([])

    const flatRef = useRef(null);
    

    const pdfDismiss = () => {
        setPdfIsOpen(false);
    }

    const openPdfFile = (title: string, uri: string) => {
        setPdfTitle(title);
        setPdfUri(uri);
        setPdfIsOpen(true);
    }

    const handleGetCertificates = async () => {

        const response = await api.get('certificates', {params:{sales_order_code: search}});
        
        const storage = await fileStorage.getAll();

        const data = response.data.map( (item: CertFileProps) => {
            item.icon =  storage 
                ? storage.some( (x: FileStorageProps) => x.id == item.id ) ? 'view' : 'download'
                : 'download';
                
            return item;
        } )

        setCertificates(data);

        setHasSearch( !!search );

    }

    const requestCertFile: RequestCertFileProps = async (id, url, cert_name, slug ) => {

        const downloadedFile =  await fileStorage.getOne(id);

        if(downloadedFile){
            openPdfFile(downloadedFile.cert_name, downloadedFile.file);
            return;
        }
     

        const token = await AsyncStorage.getItem('@Portella:token');
     
        const options ={
            headers: {
                'Accept': 'application/pdf',
                'Content-Type': 'application/pdf',
                'Authorization': `Bearer ${token}`
              }
        }
        try{
            
            setInProgress([...inProgress, id]);
            

            if ( inProgress.some(ipItem => ipItem === id) ){
                console.log('prevent');
                setInProgress(inProgress.filter(item => item !== id));
                return;
            }


            const { uri } = await FileSystem.downloadAsync(
                url,
                FileSystem.documentDirectory + slug + '.pdf',
                options
            );

            await fileStorage.set({id, file: uri, cert_name });
            
            const storage = await fileStorage.getAll();

            if( storage ){
                certificates.map( (item: CertificatesData) => {
                    item.icon =  storage.some( (x: FileStorageProps) => x.id == item.id ) ? 'view' : 'download';
                    return item;
                } );
            }

            openPdfFile(cert_name, uri);

        }catch(error){
            console.error(error);
        }finally{
            setInProgress(inProgress.filter(item => item !== id));
        }

    }

    const renderItem: ListRenderItem<CertificatesData> = ({item}) => {

        const loading = inProgress.some(ipItem => ipItem === item.id);

        return(
            <Item 
                data={item} 
                handler={ () => requestCertFile(item.id, item.download_url, item.cert_name, item.slug) } 
                loading={loading}
            />
        )
    
    };



    return (
        <>
        {pdfIsOpen && (
            <PdfViewer 
                title={pdfTitle}
                uri={pdfUri}
                onRequestClose={pdfDismiss}
            />
        )}
        { ! pdfIsOpen && (
            <View style={styles.container}>
                <PageHeader />
                <View
                    style={styles.containt}
                >
                    {/* <TextField
                        style={styles.inputSearch}
                        label="Buscar..."
                        focus={searchFocus}
                        blurOnSubmit={true}
                        value={search}
                        onChangeText={text => setSearch(text)}
                        onFocus={() => setSearchFocus(true)}
                        onBlur={() => setSearchFocus(false)}
                        search={false}
                        onSubmitEditing={ () => { handleGetCertificates() }}
                        autoCapitalize='characters'

                    /> */}

                    <TextInput 
                        style={[styles.inputSearch, search ? {} : styles.inputPlaceholder]}
                        placeholder='Digite o número do PV...'
                        blurOnSubmit={true}
                        value={search}
                        onChangeText={text => setSearch(text)}
                        onFocus={() => setSearchFocus(true)}
                        onBlur={() => setSearchFocus(false)}
                        onSubmitEditing={ () => { handleGetCertificates() }}
                        autoCapitalize='characters'
                    />

                    <FocusButton
                        style={{marginBottom: 20}}
                        text="Localizar Certificado"
                        bgColor='#FFF'
                        textColor='#004254'
                        onPress={() => handleGetCertificates() }
                    />

                    
                    { search && hasSearch &&
                    <Text style={styles.resultText}>
                        { certificates.length ? 'Resultados' : 'Nenhum resultado' }
                    </Text>
                    }

                    <View>
                        <FlatList 
                            ref={flatRef}
                            data={certificates}
                            style={{ flexGrow: 0, height: '77%'}}
                            keyExtractor={item => String(item.id)}
                            showsVerticalScrollIndicator={false}
                            renderItem={(item)=>renderItem(item)}
                        />
                    </View>

                </View>
            </View>
        )}
        </>
    );
}

export default Certificates;