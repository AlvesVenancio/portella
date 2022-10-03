import React from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import CategoryInfo from '../../components/ProductCategory/CategoryInfo';
import WebView from 'react-native-webview';

const categoryImages = [
    {
        imgUrl: 'https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-08_144225451.png'
    },
    {
        imgUrl: 'https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-01_100923352-e1654635615131.png'
    },
    {
        imgUrl: 'https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-08_144225451.png'
    },
    {
        imgUrl: 'https://www.portellacabos.com.br/wp-content/uploads/2022/06/imagem_2022-06-08_144225451.png'
    },
];

const ProductsTable = () => {

    return (
        <>
            <View style={styles.container}>
                <PageHeader />
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        paddingTop: 10,
                    }}
                >
                    <View style={[styles.productsContainer]}>
                        <CategoryInfo
                            category='Acessórios'
                            subCategory='Destorcedor Olhal x Olhal'
                            categoryImages={categoryImages}
                        />
                    </View>
                </ScrollView>
            </View>
            <WebView
                style={styles.webView}
                source={{uri: "https://www.portellacabos.com.br/categoria-produto/acessorios/destorcedor-olhal-x-olhal/?appportella"}}
            />
        </>
    );
}

export default ProductsTable;