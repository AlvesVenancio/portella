import React, {  useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, ListRenderItem, ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

import {Product} from '../../components/Product';

import styles from './styles';

import { StackParamAuthList } from '../../routes/AuthRoutes';
import { StackNavigationProp } from '@react-navigation/stack';
import apiProd from '../../services/apiProd';

type NavigationType = StackNavigationProp<StackParamAuthList>

export interface Category {
    id: number;
    name: string;
    slug: string;
    image: {
        src: string;
    };

}
const Categories = () => {

    const [categories, setCategories] = useState<Category[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [loadedPages, setLoadedPages] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [loadAll, setLoadAll] = useState<boolean>(false);
    
    const navigation = useNavigation<NavigationType>();

    const flatRef = useRef(null);

    const handleNavigateToSub = ({id, name}: {id: number, name: string}) => {
        navigation.navigate('SubCategories', { parent: id, category: name });
    }

    const handleLayout = async () => {

    }

    async function getCategories ()  {
        const perPage = 15;
        console.log('carregando ' + offset);
        if(loading || loadAll) return;


        setLoading(true);

        try{
            const response = await apiProd.get('products/categories', {
                params: {parent: 0,  per_page: perPage, offset}
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
                link={() => handleNavigateToSub(item)}
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
        <View style={styles.container}>
            <PageHeader />
 
            <View style={[styles.productsContainer, {height:'77%'} ]}>

                <FlatList
                    ref={flatRef}
                    data={categories}

                    style={styles.flatList}
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
    );
}

export default Categories;