import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import Product from '../../components/Product';


const Products = () => {

    const [layoutColumn, setLayoutColumn] = useState<boolean>(true);
    
    const navigation = useNavigation();

    const handleNavigateToLogin = () => {
        navigation.navigate('Login');
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
                        column={layoutColumn}
                    />
                    <Product
                        title='Product{\n}name'
                        imageURL='https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-01_101138780-e1654635592256-300x311.png'
                        link={handleNavigateToLogin}
                        column={layoutColumn}
                    />
                    <Product
                        title='Product{\n}name'
                        imageURL='https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-01_101138780-e1654635592256-300x311.png'
                        link={handleNavigateToLogin}
                        column={layoutColumn}
                    />
                    <Product
                        title='Product{\n}name'
                        imageURL='https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-01_101138780-e1654635592256-300x311.png'
                        link={handleNavigateToLogin}
                        column={layoutColumn}
                    />
                    <Product
                        title='Product{\n}name'
                        imageURL='https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-01_101138780-e1654635592256-300x311.png'
                        link={handleNavigateToLogin}
                        column={layoutColumn}
                    />
                    <Product
                        title='Product{\n}name'
                        imageURL='https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-01_101138780-e1654635592256-300x311.png'
                        link={handleNavigateToLogin}
                        column={layoutColumn}
                    />
                    <Product
                        title='Product{\n}name'
                        imageURL='https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-01_101138780-e1654635592256-300x311.png'
                        link={handleNavigateToLogin}
                        column={layoutColumn}
                    />
                    <Product
                        title='Product{\n}name'
                        imageURL='https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-01_101138780-e1654635592256-300x311.png'
                        link={handleNavigateToLogin}
                        column={layoutColumn}
                    />
                    <Product
                        title='Product{\n}name'
                        imageURL='https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-01_101138780-e1654635592256-300x311.png'
                        link={handleNavigateToLogin}
                        column={layoutColumn}
                    />
                    <Product
                        title='Product{\n}name'
                        imageURL='https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-01_101138780-e1654635592256-300x311.png'
                        link={handleNavigateToLogin}
                        column={layoutColumn}
                    />
                    <Product
                        title='Product{\n}name'
                        imageURL='https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-01_101138780-e1654635592256-300x311.png'
                        link={handleNavigateToLogin}
                        column={layoutColumn}
                    />
                    <Product
                        title='Product{\n}name'
                        imageURL='https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-01_101138780-e1654635592256-300x311.png'
                        link={handleNavigateToLogin}
                        column={layoutColumn}
                    />
                    <Product
                        title='Product{\n}name'
                        imageURL='https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-01_101138780-e1654635592256-300x311.png'
                        link={handleNavigateToLogin}
                        column={layoutColumn}
                    />
                    <Product
                        title='Product{\n}name'
                        imageURL='https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-01_101138780-e1654635592256-300x311.png'
                        link={handleNavigateToLogin}
                        column={layoutColumn}
                    />
                    <Product
                        title='Product{\n}name'
                        imageURL='https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-01_101138780-e1654635592256-300x311.png'
                        link={handleNavigateToLogin}
                        column={layoutColumn}
                    />
                    <Product
                        title='Product{\n}name'
                        imageURL='https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-01_101138780-e1654635592256-300x311.png'
                        link={handleNavigateToLogin}
                        column={layoutColumn}
                    />
                    <Product
                        title='Product{\n}name'
                        imageURL='https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-01_101138780-e1654635592256-300x311.png'
                        link={handleNavigateToLogin}
                        column={layoutColumn}
                    />
                    <Product
                        title='Product{\n}name'
                        imageURL='https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-01_101138780-e1654635592256-300x311.png'
                        link={handleNavigateToLogin}
                        column={layoutColumn}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

export default Products;