import React  from 'react';
import { Image, View, Linking } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import logoImg from '../../assets/images/logo.png';
// import homeIcon from '../../assets/images/icons/home.png';
import {  FontAwesome5 } from '@expo/vector-icons';

import profileIcon from '../../assets/images/icons/profile.png';


import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamAuthList } from '../../routes/AuthRoutes';

type NavigationType = StackNavigationProp<StackParamAuthList>


interface PageHeaderProps {
    children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children }) => {

    const navigation = useNavigation<NavigationType>();

    const handleWppChat = () => {
        Linking.openURL('https://wa.me/5521965250676');
    }

    const handleGoHome = () => {
        navigation.navigate('Slides');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BorderlessButton onPress={handleGoHome}>
                    <Image source={logoImg} style={styles.logo} resizeMode={'contain'} />
                </BorderlessButton>
                <View style={styles.iconsContainer}>
       
                    <BorderlessButton onPress={handleWppChat}>
                        <FontAwesome5 name="whatsapp" size={22} color="#fff"/>
                    </BorderlessButton>
                </View>
            </View>

            {children}
        </View>
    );
}

export default PageHeader;