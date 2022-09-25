import React from 'react';
import { View, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';


const ProductsTable = () => {
    
    const navigation = useNavigation();

    const handleNavigateToLogin = () => {
        navigation.navigate('Login');
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
                    
                </View>

            </ScrollView>
        </View>
    );
}

export default ProductsTable;