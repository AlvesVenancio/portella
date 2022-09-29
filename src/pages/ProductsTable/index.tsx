import React from 'react';
import { View, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import CategoryInfo from '../../components/ProductCategory/CategoryInfo';

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

const products = [
    {a: 'DOOP-6',b: '1/4″',c: '6,',d: '19',e: '17',f: '6',g: '16',h: '75',i: '0.390',j: '0,67'},
    {a: 'DOOP-8',b: '5/16″',c: '8,',d: '20',e: '20',f: '8',g: '19',h: '92',i: '0.570',j: '0,25'},
    {a: 'DOOP-10',b: '3/8″',c: '10,',d: '30',e: '25',f: '10',g: '24',h: '116',i: '1.020',j: '0,60'},
    {a: 'DOOP-13',b: '1/2″',c: '13,',d: '36',e: '32',f: '13',g: '31',h: '145',i: '1.630',j: '0,08'},
    {a: 'DOOP-16',b: '5/8″',c: '16,',d: '42',e: '38',f: '16',g: '37',h: '178',i: '2.360',j: '0,15'},
    {a: 'DOOP-19',b: '3/4″',c: '19,',d: '51',e: '44',f: '19',g: '43',h: '202',i: '3.270',j: '1.430'},
    {a: 'DOOP-22',b: '7/8″',c: '22,',d: '54',e: '50',f: '22',g: '50',h: '236',i: '4.540',j: '2,00'},
    {a: 'DOOP-25',b: '1″',c: '25,',d: '63',e: '63',f: '25',g: '62',h: '277',i: '5.670',j: '3,60'},
];

const tableHead = [
    {
        a: '',
        b: 'A',
        c: '',
        d: '',
        e: '',
        f: 'Dimensões\nmm',
        g: '',
        h: '',
        i: 'Carga de\nTrab.',
        j: 'Peso\nunit.',
    },
    {
        a: 'REF',
        b: 'pol',
        c: 'mm',
        d: 'B',
        e: 'C',
        f: 'D',
        g: 'E',
        h: 'F',
        i: 'kgf',
        j: 'kg',
    }
];

const ProductsTable = () => {
    
    const navigation = useNavigation(); 

    const handleNavigateToLogin = () => {
        // navigation.navigate('Login');
        console.log('teste');
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
                <View style={[styles.productsContainer]}>
                    <CategoryInfo
                        category='Acessórios'
                        subCategory='Destorcedor Olhal x Olhal'
                        categoryImages={categoryImages}
                        products={products}
                        tableHead={tableHead}
                    />
                </View>

            </ScrollView>
        </View>
    );
}

export default ProductsTable;