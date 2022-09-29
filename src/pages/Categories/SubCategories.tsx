import React, { useEffect, useRef, useState } from 'react';
import { View, ActivityIndicator, ListRenderItem, FlatList, Text } from 'react-native';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import {Product} from '../../components/Product';

import PageHeader from '../../components/PageHeader';

import apiProd from '../../services/apiProd';

import styles from './styles';

import { StackParamAuthList } from '../../routes/AuthRoutes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Category } from '.';

type NavigationType = StackNavigationProp<StackParamAuthList>

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
    
    const navigation = useNavigation<NavigationType>();

    const flatRef = useRef(null);

    const route = useRoute<RouteProp <RouteParams>>();

    const handleNavigateToProduct = (id: number) => {
        navigation.navigate('ProductsTable');
    }

    const handleNavigateToLogin = () => {
        console.log(route.params.parent)
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
                link={() => handleNavigateToProduct(item.id)}
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
    );
}

export default SubCategories;