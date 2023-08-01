import React, { useState, useContext} from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, Alert, Linking, TouchableOpacity} from 'react-native';


import FocusButton from '../../components/FocusButton';

import PageHeader from '../../components/PageHeader';
import TextField from '../../components/TextField';
import api from '../../services/api';

import qs from 'qs';

import { isValidEmail, isValidPhone } from '../../utils/validators';


import styles from './styles';
import { AuthContext } from '../../contexts/AuthContext';

const Contact = () => {

    const [name, setName] = useState<string>();
    const [nameFocus, setNameFocus] = useState<boolean>(false);
    
    const [phone, setPhone] = useState<string>();
    const [phoneFocus, setPhoneFocus] = useState<boolean>(false);

    const [email, setEmail] = useState<string>();
    const [emailFocus, setEmailFocus] = useState<boolean>(false);

    const [message, setMessage] = useState<string>();
    const [messageFocus, setMessageFocus] = useState<boolean>(false);

    const [ formSending, setFormSending ] = useState<boolean>(false);

    const { signOut } = useContext(AuthContext);

    const handleSendContact = async () => {
      
      if( ! name ){
        Alert.alert('Preencha o campo nome');
        return;
      }

      if( !phone || ! isValidPhone(phone) ){
        Alert.alert('O campo telefone é inválido.')
        return;
      }

      if( !email || ! isValidEmail(email) ){
        Alert.alert('O campo email é inválido.')
        return;
      }

      if( ! message ){
        Alert.alert('Informe sua mensagem');
        return;
      }

      setFormSending(true);

      const data = { name, email, phone, message }
  
      try {

  
        await api.post('contact', qs.stringify(data));

        resetForm();

        Alert.alert('Mensagem envida');
        
   
      } catch (error: any) {
  
        const errMsg = String(Object.values(error?.response.data.errors)[0]);
        Alert.alert(errMsg);
  
      }

      setFormSending(false);
    }


    const resetForm =() =>{
      setName('');
      setNameFocus(false);
      setEmail('');
      setEmailFocus(false);
      setPhone('');
      setPhoneFocus(false);
      setMessage('');
      setMessageFocus(false);
    }

    const handleRmAccount = () => {
      signOut();
      Linking.openURL('https://www.portellacabos.com.br/excluir-conta/');
    }

    const requestAccountRemove = () => {
      Alert.alert(
        'Remover Conta',
        `Gostaria realmente de remover sua conta? 
        Você será deslogado no app e redirecionado para nosso site na a página de confirmação.`,
        [
          { text: 'Confirmar', onPress: () => handleRmAccount() },
          { text: 'Cancelar', onPress: () => console.log('cancelado') },
        ],
        { cancelable: true }
      );
    }

    return (
        <View style={styles.container}>
            <PageHeader />
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}
            >
              <ScrollView
                  style={styles.scrollView}
                  keyboardShouldPersistTaps={'handled'}
                  contentContainerStyle={{
                      paddingHorizontal: 16,
                      paddingBottom: 16,
                  }}
              >
                  <Text style={styles.title}>
                      Entre em Contato
                  </Text>

                  <View style={styles.form}>
                      <View style={styles.inputsBlock}>
                          <TextField
                              style={styles.input}
                              label="Nome"
                              focus={nameFocus}
                              value={name}
                              onChangeText={text => setName(text)}
                              keyboardType="default"
                              onFocus={() => setNameFocus(true)}
                              onBlur={() => setNameFocus(false)}
                          />

                          <TextField
                            style={styles.input}
                            label="Telefone"
                            focus={phoneFocus}
                            value={phone}
                            keyboardType="numeric"
                            onFocus={() => setPhoneFocus(true)}
                            onBlur={() => setPhoneFocus(false)}
                            mask="phone"
                            inputMaskChange={(text: string) => setPhone(text)}
                          />
                                          

                          <TextField
                              style={styles.input}
                              label="E-mail"
                              focus={emailFocus}
                              value={email}
                              onChangeText={text => setEmail(text)}
                              keyboardType="email-address"
                              autoCapitalize="none"
                              onFocus={() => setEmailFocus(true)}
                              onBlur={() => setEmailFocus(false)}
                          />

                          <TextField
                              style={styles.input}
                              multiline={true}
                              label="Mensagem"
                              focus={messageFocus}
                              value={message}
                              onChangeText={text => setMessage(text)}
                              keyboardType="default"
                              maxLength={1200}
                              onFocus={() => setMessageFocus(true)}
                              onBlur={() => setMessageFocus(false)}
                          />

                      </View>

                      <FocusButton
                        text="Enviar"
                        bgColor={'#004354'}
                        textColor={'#ffffff'}
                        onPress={handleSendContact}
                        isLoading={formSending}
                      />
                  </View>

                  <View
                    style={styles.ctnAccRemove}
                  >
                    <Text style={{fontWeight: 'bold'}}>
                       Meus dados:
                    </Text>
                    <TouchableOpacity onPress={requestAccountRemove} activeOpacity={.7} >
                      <Text style={styles.rmAccTitle}>
                        Solicitar remoção de conta.
                      </Text>
                    </TouchableOpacity>
                  </View>
              </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

export default Contact;