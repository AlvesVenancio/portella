import React, { ReactNode } from 'react';
import { Image, View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/images/logo.png';
import homeIcon from '../../assets/images/icons/home.png';
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

    const handleGoAcount = () => {
        // navigation.navigate('Account');
    }

    const handleGoHome = () => {
        navigation.navigate('Slides');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} style={styles.logo} resizeMode={'contain'} />
                <View style={styles.iconsContainer}>
                    <BorderlessButton style={{marginRight: 10}} onPress={handleGoHome}>
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

export default PageHeader;