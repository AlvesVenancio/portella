import React, { useEffect, useRef, useState } from 'react';
import { View, ActivityIndicator, ListRenderItem, FlatList, Text, SafeAreaView } from 'react-native';

import { WebView } from "react-native-webview";

import { RouteProp, useRoute } from '@react-navigation/native';

import {Product} from '../../components/Product';

import PageHeader from '../../components/PageHeader';

import apiProd from '../../services/apiProd';

import { strSlugify } from "../../utils/text";

import {Feather} from '@expo/vector-icons';

import styles from './styles';

import { Category } from '.';
import { BorderlessButton } from 'react-native-gesture-handler';



type RouteParams = {
    Category:{
        parent: number,
        category: string;
    };
}

const SubCategories = () => {

    const [categories, setCategories] = useState<Category[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [loadedPages, setLoadedPages] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [loadAll, setLoadAll] = useState<boolean>(false);

    const [pdfData , setPdfData] = useState({name: '', url: ''})


    const flatRef = useRef(null);

    const route = useRoute<RouteProp <RouteParams>>();

    const baseUrlPdf = (uri: string) => {
        const categorySlug = strSlugify(route.params.category);

        return `https://app.portellacabos.com.br/products/${categorySlug}/${uri}.pdf`;
    }

    const handleNavigateToProduct = (name: string, slug: string) => {

        setPdfData({name, url: baseUrlPdf(slug) });
        
    }

    const handleClosePdfWebView = () => {
        setPdfData({name: '', url: '' });
    }

    async function getCategories ()  {
        const perPage = 15;

        const parent = route.params.parent;

        if(loading || loadAll) return;


        setLoading(true);

        try{
            const response = await apiProd.get('products/categories', {
                params: {parent, per_page: perPage, offset}
            });
            
            if( ! response.data ) return;

            
            const data = response.data.map( (item: Category) => {
                const { id, name, image, slug } = item;
                
                return { id, name, image, slug };
            })


            const newData = [...categories, ...data].filter((value, index, self) =>
                index === self.findIndex((t) => (
                t.id === value.id 
                ))
            );
            
            setCategories(newData);


            setLoadedPages( loadedPages + 1)
            

            if( (loadedPages * perPage) < parseInt(response.headers['x-wp-total'])  ){
                setOffset(offset + perPage);
            }else{
                setLoadAll( true );
            }
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
        }


    }

    useEffect(()=>{
        getCategories();

    }, []);

    const renderItem: ListRenderItem<Category> = ({item}) => {

        return (
            <Product
                key={item.id}
                title={item.name}
                imageURL={item?.image?.src}
                link={() => handleNavigateToProduct(item.name, item.slug)}
                column={true}
            />
        )
    }

    

    const ListFooter = ({load}: {load: boolean}): JSX.Element => {
        if(! load ) return (<View/>);
        return(
            <View>
                <ActivityIndicator size={25} color="#004254"/>
            </View>
        )
    };

    return (
        <>
            { pdfData.url != '' &&

                <SafeAreaView style={styles.safeAreaWebView}>
                    <View style={styles.webViewHeaderBar}>
                        <BorderlessButton style={styles.goBackButton} onPress={handleClosePdfWebView} >
                            <Feather name="chevron-left" size={20} color="#FFFFFF" />                
                        </BorderlessButton>
                       <View>
                            <Text style={styles.webViewTitle}>{pdfData.name}</Text>
                        </View>
                    </View>
                    
                    <WebView
                        source={{ uri: pdfData.url }}
                    />
                </SafeAreaView>
            }
            { pdfData?.url == '' &&
                <View style={styles.container}>

                    <PageHeader />
        
                    <View style={styles.headerContainer}>
                        <Text style={styles.textSecondary}>{route.params.category}</Text>
                    </View>
                    <View style={[styles.productsContainer, {height:'77%', paddingHorizontal: 20} ]}>

                        <FlatList
                            ref={flatRef}
                            data={categories}
                            style={[styles.flatList]}
                            keyExtractor={item => String(item.id)}
                            showsVerticalScrollIndicator={false}
                            numColumns={3}
                            ListFooterComponent={<ListFooter load={loading}/>}
                            onEndReached={getCategories}
                            onEndReachedThreshold={0.2}
                            renderItem={renderItem}
                        
                        />
                    </View>
                </View>
            }
        </>
    );
}

export default SubCategories;