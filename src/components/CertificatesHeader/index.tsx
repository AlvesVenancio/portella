import React, { ReactNode } from 'react';
import { Image, View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import homeIcon from '../../assets/images/icons/home-blue.png';
import profileIcon from '../../assets/images/icons/profile-blue.png';

import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamAuthList } from '../../routes/AuthRoutes';

interface CertificatesHeaderProps {
    children?: React.ReactNode;
}

type NavigationProps = StackNavigationProp<StackParamAuthList>;

const CertificatesHeader: React.FC<CertificatesHeaderProps> = ({ children }) => {

    const navigation = useNavigation<NavigationProps>();

    const handleGoAcount = () => {
        navigation.navigate('Study');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BorderlessButton style={styles.goBackButton} onPress={handleGoAcount}>
                    <Feather name="chevron-left" size={20} color="#FFFFFF" />                
                </BorderlessButton>
                <Text style={styles.title}>Certificados</Text>
                <View style={styles.iconsContainer}>
                    <BorderlessButton style={{marginRight: 10}}>
                        <Image source={homeIcon} />
                    </BorderlessButton>
                    <BorderlessButton onPress={handleGoAcount}>
                        <Image source={profileIcon} />
                    </BorderlessButton>
                </View>
            </View>

            {children}
        </View>
    );
}

export default CertificatesHeader;