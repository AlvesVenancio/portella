import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';


import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

import {Product} from '../../components/Product';

import styles from './styles';

import { StackParamAuthList } from '../../routes/AuthRoutes';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationType = StackNavigationProp<StackParamAuthList>


type RouteParams = {
    Product:{id: number};
}
const Products = () => {

    const [layoutColumn, setLayoutColumn] = useState<boolean>(true);
    
    const navigation = useNavigation<NavigationType>();

    const route = useRoute<RouteProp <RouteParams>>();

    const handleNavigateToLogin = () => {
        console.log(route.params)
    }

    const handleLayout = () => {
        layoutColumn ? setLayoutColumn(false) : setLayoutColumn(true)
    }

    return (
        <View style={styles.container}>
            <PageHeader />
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                }}
            >
                <View style={[styles.productsContainer, layoutColumn ? {flexDirection:'column'} : {}]}>
                    <Product
                        title='Product{\n}name'
                        imageURL='https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-01_101138780-e1654635592256-300x311.png'
                        link={handleLayout}
                        column={true}
                    />
                   
                </View>
            </ScrollView>
        </View>
    );
}

export default Products;