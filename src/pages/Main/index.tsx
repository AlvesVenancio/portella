import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import logo from '../../assets/images/logo.png';
import MainBg from '../../assets/images/mainbg.png';

import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../routes/AppRoutes';

type NavigationProps = StackNavigationProp<StackParamList>;

const Login = () => {

    const navigation = useNavigation<NavigationProps>();

    const handleNavigateToRegister = () => {
        navigation.navigate('Register');
    }

    const handleNavigateToLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.containerBg} source={MainBg} resizeMode='contain'>
                <Image style={styles.headerImg} source={logo} resizeMode="contain" />
                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.button} onPress={handleNavigateToLogin}>
                        <View style={styles.buttonBorder}>
                            <Text style={styles.buttonText}>Login...</Text> 
                        </View>
                    </RectButton>
                    <RectButton style={styles.buttonRegister} onPress={handleNavigateToRegister}>
                        <Text style={styles.buttonTextRegister}>Cadastre-se</Text>
                    </RectButton>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login;