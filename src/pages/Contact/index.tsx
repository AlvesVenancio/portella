import React, { useState, } from 'react';
import { View, Text, ScrollView, Image, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import FocusButton from '../../components/FocusButton';

import PageHeader from '../../components/PageHeader';
import TextField from '../../components/TextField';

import styles from './styles';

const Contact = () => {

    const [name, setName] = useState<string>();
    const [nameFocus, setNameFocus] = useState<boolean>(false);
    
    const [tel, setTel] = useState<string>();
    const [telFocus, setTelFocus] = useState<boolean>(false);

    const [email, setEmail] = useState<string>();
    const [emailFocus, setEmailFocus] = useState<boolean>(false);

    const [message, setMessage] = useState<string>();
    const [messageFocus, setMessageFocus] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            <PageHeader />
            <ScrollView
                style={styles.scrollView}
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
                            focus={telFocus}
                            value={tel}
                            onChangeText={text => setTel(text)}
                            keyboardType="numeric"
                            onFocus={() => setTelFocus(true)}
                            onBlur={() => setTelFocus(false)}
                        />

                        <TextField
                            style={styles.input}
                            label="E-mail"
                            focus={emailFocus}
                            value={email}
                            onChangeText={text => setEmail(text)}
                            keyboardType="email-address"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />

                        <TextField
                            style={styles.input}

                            multiline={true}
                            numberOfLines={10}

                            label="Mensagem"
                            focus={messageFocus}
                            value={message}
                            onChangeText={text => setMessage(text)}
                            keyboardType="default"
                            onFocus={() => setMessageFocus(true)}
                            onBlur={() => setMessageFocus(false)}
                        />

                    </View>

                    <FocusButton
                        text="Enviar"
                        bgColor={'#004354'}
                        textColor={'#ffffff'}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

export default Contact;