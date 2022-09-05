import React, { useState, useEffect } from 'react';
import { View, Image, Text, ScrollView, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Onboarding from '../../components/Onboarding';
import FocusButton from '../../components/FocusButton';
import CheckBoxStyled from '../../components/CheckBoxStyled';
import TextField from '../../components/TextField';

import login from '../../assets/images/login.png';

import styles from './styles';

const Login = () => {

    const navigation = useNavigation();

    const [firstLaunch, setFirstLaunch] = useState<boolean>();
    const [email, setEmail] = useState<string>();
    const [emailFocus, setEmailFocus] = useState<boolean>(false);
    const [pass, setPass] = useState<string>();
    const [passFocus, setPassFocus] = useState<boolean>(false);
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    useEffect(() => {
    }, []);

    const handleNavigateToRegister = () => {
        navigation.navigate('Register');
    }

    const handleNavigateToForgotPass = () => {
        navigation.navigate('ForgotPass');
    }

    if (firstLaunch === null) {
        return <Text>Loading...</Text>;
    } else if (firstLaunch) {
        return <Onboarding />;
    } else {
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
                        <Image style={styles.headerImg} source={login} resizeMode="contain" />
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
                            />
                            <TextField
                                style={styles.inputPass}
                                label="Senha"
                                focus={passFocus}
                                value={pass}
                                onChangeText={text => setPass(text)}
                                secureTextEntry={true}
                                onFocus={() => setPassFocus(true)}
                                onBlur={() => setPassFocus(false)}
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
                            bgColor={email && pass ? '#04D361' : '#DCDCE5'}
                            textColor={email && pass ? '#FFF' : '#9C98A6'}
                        />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}

export default Login;