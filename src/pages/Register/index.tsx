import React, { useRef, useState, useEffect } from 'react';
import { Image, Text, View, KeyboardAvoidingView, Keyboard, ScrollView, Alert } from 'react-native';
import Swiper from 'react-native-swiper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import goBackArrow from '../../assets/images/icons/goBackArrow.png';

import styles from './styles';
import TextField from '../../components/TextField';
import FocusButton from '../../components/FocusButton';
import ConfirmScreen from '../../components/ConfirmScreen';

import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../routes/AppRoutes';

import api from '../../services/api';
import { isValidCPF, isValidDate, isValidEmail, isValidPhone } from '../../utils/validators';

import qs from 'qs';

type RegisterScreenNavigationType = StackNavigationProp<StackParamList>


type HandleSwiperNavProps = {
    
    validate?:  { 
        validator: (str:string) => boolean; 
        label: string; 
        value: string | undefined; 
    }[];
}

const Register = () => {


    const navigation = useNavigation<RegisterScreenNavigationType>();

    const swipRef = useRef() as React.MutableRefObject<Swiper>;
    const [swiperIndex, setSwiperIndex] = useState<number>(1);

    const [name, setName] = useState<string>();
    const [nameFocus, setNameFocus] = useState<boolean>(false);
    const [lastName, setLastName] = useState<string>();
    const [lastNameFocus, setLastNameFocus] = useState<boolean>(false);

    const [company, setCompany] = useState<string>();
    const [companyFocus, setCompanyFocus] = useState<boolean>(false);
    const [positionTitle, setPositionTitle] = useState<string>();
    const [positionTitleFocus, setPositionTitleFocus] = useState<boolean>(false);

    const [email, setEmail] = useState<string>();
    const [emailFocus, setEmailFocus] = useState<boolean>(false);
    const [password, setPassword] = useState<string>();
    const [passwordFocus, setPasswordFocus] = useState<boolean>(false);

    const [cpf, setCpf] = useState<string>();
    const [cpfFocus, setCpfFocus] = useState<boolean>(false);
    const [birthDate, setBirthDate] = useState<string>();
    const [birthDateFocus, setBirthDateFocus] = useState<boolean>(false);    
    const [phone, setPhone] = useState<string>();
    const [phoneFocus, setPhoneFocus] = useState<boolean>(false);

    const [headerVisible, setHeaderVisible] = useState<boolean>(true);
    const [register, setRegister] = useState<boolean>(false);
    const [awaitRegister, setAwaitRegister] = useState<boolean>(false);

    const [ totalSlides, setTotalSlides] = useState<number>();

    useEffect(() => {
       
        Keyboard.addListener("keyboardDidShow",
            () => { setHeaderVisible(false) }
        );

        Keyboard.addListener("keyboardDidHide",
            () => { setHeaderVisible(true) }
        );

        setTotalSlides( React.Children.toArray(swipRef.current.props.children).length );
    }, []);

    const handleNavigateToLogin = () => {
        navigation.popToTop();
        navigation.navigate('Login');
    }

    const handleGoBack= () => {

        if(swiperIndex === 1){
            navigation.popToTop();
            navigation.navigate('Login');
        }else{
            swipRef.current.scrollBy(-1);
            setSwiperIndex(swiperIndex - 1)
        }
    }

    const handleSwiperNav = ( {validate}: HandleSwiperNavProps = {}) =>{

        let formErrors: Array<string> = [];

        if(validate){
  
            validate.map( item => {
                const isValid = item.validator( item.value ?? '' );
                
                if( ! isValid ){
                    if( item.label == 'Senha'){
                        formErrors.push(`A senha deve ter pelo menos 6 caracteres.`)
                    }else{
                        formErrors.push(`O campo ${item.label} é inválido.`)
                    }

                }
            })
        }

        if(  formErrors.length ){
            Alert.alert( formErrors[0] );
            return;
        }

        if( swiperIndex != totalSlides){
            swipRef.current.scrollBy(1);
            setSwiperIndex(swiperIndex + 1);
        }else{
            handleRegister();
        }
        
    }

    const isValidPass = (str: string) => {
        return str.length >= 6;
    }

    const handleRegister = async () => {

        const data = { 
            full_name: `${name} ${lastName}`,
            email,
            password,
            phone,
            birth_date: birthDate,
            doc_cpf: cpf,
            company,
            position_title: positionTitle
        }

        try{
            setAwaitRegister(false);

            await api.post('authentication/register', qs.stringify(data) );

            setAwaitRegister(false);
            setRegister(true);

        }catch( error: any ){
            
            if( error?.response.status == 400 ){

                const errMsg = String(Object.values(error?.response.data.errors)[0]);
                Alert.alert( errMsg );

            }else{
                console.log(error?.response );
                Alert.alert('Algo errado!\nNão foi possível concluir o cadastro.\nTente novametne mais tarde.');
            }
            
        }
    }

    const SwiperHeader = () => (
        <View style={[styles.headerItem, !headerVisible && { opacity: 0 }]}>
            <Text style={styles.title}>
                Crie sua {'\n'}conta gratuíta
            </Text>
            <Text style={styles.description}>
                Basta preencher esses dados {'\n'}e você estará conosco.
            </Text>
        </View>
    )

    if (register) return (
        <ConfirmScreen
            title="Cadastro concluído!"
            description="Agora você faz parte da plataforma da Portella Cabos"
            btnTitle="Fazer login"
            navigate={handleNavigateToLogin}
        />
    );

    return (
        
        <SafeAreaView style={styles.container}>
            <View style={styles.swiperContainer}>
                
                <Swiper
                    keyboardShouldPersistTaps="always"
                    ref={swipRef}
                    loop={false}
                    scrollEnabled={false}
                    paginationStyle={styles.paginationStyle}
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDotStyle}
                >
                    <View style={styles.Item}>
                        <KeyboardAvoidingView
                            behavior="padding"
                        >
                            <SwiperHeader/>
                            <View>
                                <Text style={styles.formTitle}>
                                    01. Quem é você?
                                </Text>
                                <TextField
                                    style={styles.inputBRadiusTop}
                                    label="Nome"
                                    focus={nameFocus}
                                    value={name}
                                    onChangeText={text => setName(text)}
                                    onFocus={() => setNameFocus(true)}
                                    onBlur={() => setNameFocus(false)}
                                />
                                <TextField
                                    style={styles.inputBRadiusBottom}
                                    label="Sobrenome"
                                    focus={lastNameFocus}
                                    value={lastName}
                                    onChangeText={text => setLastName(text)}
                                    onFocus={() => setLastNameFocus(true)}
                                    onBlur={() => setLastNameFocus(false)}
                                />
                                <FocusButton
                                    style={styles.focusButton}
                                    text="Próximo"
                                    bgColor={name && lastName ? '#004354' : '#DCDCE5'}
                                    textColor={name && lastName ? '#FFF' : '#9C98A6'}
                                    enabled={name && lastName ? true : false}
                                    onPress={ () => handleSwiperNav() }
                                />
                            </View>
                        </KeyboardAvoidingView>
                    </View>

                    <View style={styles.Item}>
                        <KeyboardAvoidingView
                            behavior="padding"
                        >
                            <SwiperHeader/>
                            <View>
                                <Text style={styles.formTitle}>
                                    02. Identificação e telefone
                                </Text>
                                <TextField
                                    style={styles.inputBRadiusTop}
                                    label="CPF"
                                    focus={cpfFocus}
                                    value={cpf}
                                    onFocus={() => setCpfFocus(true)}
                                    onBlur={() => setCpfFocus(false)}
                                    mask="cpf"
                                    inputMaskChange={(text: string) => setCpf(text)}
                                />
                                <TextField
                                    label="Data de nascimento"
                                    focus={birthDateFocus}
                                    value={birthDate}
                                    onFocus={() => setBirthDateFocus(true)}
                                    onBlur={() => setBirthDateFocus(false)}
                                    mask="date"
                                    inputMaskChange={(text: string) => setBirthDate(text)}
                                />
                                <TextField
                                    style={styles.inputBRadiusBottom}
                                    label="Telefone"
                                    focus={phoneFocus}
                                    value={phone}
                                    onFocus={() => setPhoneFocus(true)}
                                    onBlur={() => setPhoneFocus(false)}
                                    mask="phone"
                                    inputMaskChange={(text: string) => setPhone(text)}
                                />
                                <FocusButton
                                    style={styles.focusButton}
                                    text="Próximo"
                                    bgColor={cpf && phone ? '#004354' : '#DCDCE5'}
                                    textColor={cpf && phone ? '#FFF' : '#9C98A6'}
                                    enabled={cpf && phone ? true : false}
                                    onPress={() => handleSwiperNav({
                                        validate: [
                                            {validator: isValidCPF, label: 'Cpf', value: cpf},
                                            {validator: isValidDate,label: 'Data de nascimetno', value: birthDate},
                                            {validator: isValidPhone,label: 'Telefone', value: phone}
                                        ]
                                    })}
                                />
                            </View>
                        </KeyboardAvoidingView>
                    </View>

                    <View style={styles.Item}>
                        <KeyboardAvoidingView
                            behavior="padding"
                        >
                            <SwiperHeader/>
                            <View>
                                <Text style={styles.formTitle}>
                                    03. Empresa e cargo
                                </Text>
                                <TextField
                                    style={styles.inputBRadiusTop}
                                    label="Empresa"
                                    focus={companyFocus}
                                    value={company}
                                    onChangeText={text => setCompany(text)}
                                    onFocus={() => setCompanyFocus(true)}
                                    onBlur={() => setCompanyFocus(false)}
                                />
                                <TextField
                                    style={styles.inputBRadiusBottom}
                                    label="Cargo"
                                    focus={positionTitleFocus}
                                    value={positionTitle}
                                    onChangeText={text => setPositionTitle(text)}
                                    onFocus={() => setPositionTitleFocus(true)}
                                    onBlur={() => setPositionTitleFocus(false)}
                                />
                                <FocusButton
                                    style={styles.focusButton}
                                    text="Próximo"
                                    bgColor={company && positionTitle ? '#004354' : '#DCDCE5'}
                                    textColor={company && positionTitle ? '#FFF' : '#9C98A6'}
                                    enabled={company && positionTitle ? true : false}
                                    onPress={() => handleSwiperNav()}
                                />
                            </View>
                        </KeyboardAvoidingView>
                    </View>

                    <View style={styles.Item}>
                        <KeyboardAvoidingView
                            behavior="height"
                        >
                            <SwiperHeader/>
                            <View>
                                <Text style={styles.formTitle}>
                                    04. Email e Senha
                                </Text>
                                <TextField
                                    style={styles.inputBRadiusTop}
                                    label="E-mail"
                                    focus={emailFocus}
                                    value={email}
                                    onChangeText={text => setEmail(text)}
                                    onFocus={() => setEmailFocus(true)}
                                    onBlur={() => setEmailFocus(false)}
                                    autoCapitalize="none"
                                />
                                <TextField
                                    style={styles.inputBRadiusBottom}
                                    label="Senha"
                                    secureTextEntry={true}
                                    focus={passwordFocus}
                                    value={password}
                                    onChangeText={text => setPassword(text)}
                                    onFocus={() => setPasswordFocus(true)}
                                    onBlur={() => setPasswordFocus(false)}
                                />
                                <FocusButton
                                    style={styles.focusButton}
                                    text="Concluir cadastro"
                                    bgColor={email && password ? '#004354' : '#DCDCE5'}
                                    textColor={email && password ? '#FFF' : '#9C98A6'}
                                    enabled={email && password && ! awaitRegister ? true : false}
                                    isLoading={awaitRegister}
                                    onPress={() => handleSwiperNav({
                                        validate: [
                                            {validator: isValidEmail, label: 'email', value: email},
                                            {validator: isValidPass,label: 'Senha', value: password}
                                        ]
                                    })}
                                />
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </Swiper>
                <BorderlessButton
                    style={styles.buttonNext}
                    onPress={handleGoBack}
                >
                    <Image source={goBackArrow} resizeMode="contain" />
                </BorderlessButton>
            </View>
        </SafeAreaView>
    );
}



export default Register;