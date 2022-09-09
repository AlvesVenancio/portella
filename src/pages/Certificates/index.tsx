import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import CertificatesHeader from '../../components/CertificatesHeader';

import styles from './styles';
import Certificate from '../../components/Certificate';
import TextField from '../../components/TextField';


const Certificates = () => {

    const navigation = useNavigation();

    const [search, setSearch] = useState<string>();
    const [searchFocus, setSearchFocus] = useState<boolean>(false);

    const handleNavigateToLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <CertificatesHeader />
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                }}
            >
                <TextField
                    style={styles.inputSearch}
                    label="Buscar..."
                    focus={searchFocus}
                    value={search}
                    onChangeText={text => setSearch(text)}
                    onFocus={() => setSearchFocus(true)}
                    onBlur={() => setSearchFocus(false)}
                    search={true}
                />
                <Text style={styles.resultText}>Resultado</Text>

                <View style={styles.certificatesContainer}>
                    <Certificate 
                        link={handleNavigateToLogin}
                        title='PDF'
                        cod='123'
                    />
                    <Certificate 
                        link={handleNavigateToLogin}
                        title='PDF'
                        cod='123'
                    />
                    <Certificate 
                        link={handleNavigateToLogin}
                        title='PDF'
                        cod='123'
                    />
                    <Certificate 
                        link={handleNavigateToLogin}
                        title='PDF'
                        cod='123'
                    />
                    <Certificate 
                        link={handleNavigateToLogin}
                        title='PDF'
                        cod='123'
                    />
                    <Certificate 
                        link={handleNavigateToLogin}
                        title='PDF'
                        cod='123'
                    />
                    <Certificate 
                        link={handleNavigateToLogin}
                        title='PDF'
                        cod='123'
                    />
                    <Certificate 
                        link={handleNavigateToLogin}
                        title='PDF'
                        cod='123'
                    />
                    <Certificate 
                        link={handleNavigateToLogin}
                        title='PDF'
                        cod='123'
                    />
                </View>
            </ScrollView>
        </View>
    );
}

export default Certificates;