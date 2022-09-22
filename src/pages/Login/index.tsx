import React, { useState, useEffect, useContext } from 'react';
import { View, Image, Text, ScrollView, TouchableWithoutFeedback, KeyboardAvoidingView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FocusButton from '../../components/FocusButton';
import CheckBoxStyled from '../../components/CheckBoxStyled';
import TextField from '../../components/TextField';

import logo from '../../assets/images/logo.png';

import styles from './styles';

import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../routes/AppRoutes';
import { AuthContext } from '../../contexts/AuthContext';

type NavigationProps = StackNavigationProp<StackParamList>

const Login = () => {

    const navigation = useNavigation<NavigationProps>();

    const [email, setEmail] = useState<string>('');
    const [emailFocus, setEmailFocus] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [passFocus, setPassFocus] = useState<boolean>(false);
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const { signIn } = useContext(AuthContext);

    useEffect(() => {
    }, []);

    const handleNavigateToRegister = () => {
        navigation.navigate('Register');
    }

    const handleNavigateToForgotPass = () => {
        navigation.navigate('ForgotPass');
    }

    const handleSignIn = async () => {
        
        try {
            await signIn({email, password});
        } catch (error:any) {
            Alert.alert(error.message)
        }
    }

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps={"always"}
            scrollEnabled={false}
        >
            <KeyboardAvoidingView
                behavior="padding"
            >
                <View style={styles.header}>
                    <Image style={styles.headerImg} source={logo} resizeMode="contain" />
                </View>
                <View style={styles.loginForm}>
                    <View style={styles.titleAndCreateBlock}>
                        <Text style={styles.title}>Fazer login</Text>
                        <TouchableWithoutFeedback
                            onPress={handleNavigateToRegister}
                        >
                            <Text style={styles.createAccountButtonText}>Criar uma conta</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.inputsBlock}>
                        <TextField
                            style={styles.inputEmail}
                            label="E-mail"
                            focus={emailFocus}
                            value={email}
                            onChangeText={text => setEmail(text)}
                            keyboardType="email-address"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                            autoCapitalize="none"
                            
                        />
                        <TextField
                            style={styles.inputPass}
                            label="Senha"
                            focus={passFocus}
                            value={password}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry={true}
                            onFocus={() => setPassFocus(true)}
                            onBlur={() => setPassFocus(false)}
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.rememberAndPassBlock}>
                        <CheckBoxStyled
                            check={rememberMe}
                            text="Lembrar-me"
                            onPress={() => setRememberMe(!rememberMe)}
                        />
                        <TouchableWithoutFeedback
                            onPress={handleNavigateToForgotPass}
                        >
                            <Text style={styles.forgetPassButtonText}>Esqueci minha senha</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <FocusButton
                        text="Entrar"
                        bgColor={email && password ? '#004354' : '#DCDCE5'}
                        textColor={email && password ? '#FFF' : '#9C98A6'}
                        onPress={handleSignIn}
                    />
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default Login;