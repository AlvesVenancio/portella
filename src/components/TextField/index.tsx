import React, { useState } from 'react';

import { View, Text, TextInput, Image, TouchableWithoutFeedback, TextInputProps } from 'react-native';

import seePassword from '../../assets/images/icons/see-password.png';
import hidePassword from '../../assets/images/icons/hide-password.png';
import searchIcon from '../../assets/images/icons/search_icon.png';

import styles from './styles';
import { maskCPF, maskPhone, maskDate } from './mask.utils';

interface TextFieldProps extends TextInputProps {
    label?: string;
    focus: boolean;
    search?: boolean;
    secureTextEntry?: boolean | undefined;
    mask?: "cpf" | "phone" | "date"
    inputMaskChange?: any
}



const TextField: React.FC<TextFieldProps> = ({
    style,
    value,
    label,
    focus,
    search, 
    secureTextEntry,
    mask,
    inputMaskChange,
    ...rest
}) => {

    const [hidePass, setHidePass] = useState<boolean>(true);

    function handleChange(text: string) {
        let value = text;

        if (mask === "cpf") {
          value = maskCPF(text);
        }
        if (mask === "phone") {
          value = maskPhone(text);
        }
        if (mask === "date") {
          value = maskDate(text);
        }

        inputMaskChange(value);
      }

    return (
        <View style={[styles.container, style]}>
            <Text
                style={[
                    styles.placeHolder,
                    focus || value ? styles.placeHolderFocus : {},
                    search ? {
                        color: '#8f9aa3',
                        fontSize: 16,
                    } : {},
                ]}
            >
                {label}
            </Text>
            {focus && <View style={styles.dash} />}

            { ! inputMaskChange && (
                <TextInput
                    style={[
                        styles.input, search 
                            ? {borderColor: 'transparent'} 
                            : {}, focus || value ? styles.inputFocus : {}
                    ]}
                    value={value}
                    secureTextEntry={secureTextEntry && hidePass}
                    autoCorrect={false}
                    {...rest}
                />
            )}

            { inputMaskChange && (
                <TextInput
                    style={[
                        styles.input, search 
                            ? {borderColor: 'transparent'} 
                            : {}, focus || value ? styles.inputFocus : {}
                    ]}
                    value={value}
                    secureTextEntry={secureTextEntry && hidePass}
                    autoCorrect={false}
                    onChangeText={(text) => handleChange(text)}
                    {...rest}
                />
            )}

            {
                secureTextEntry &&
                <TouchableWithoutFeedback
                    onPress={() => hidePass ? setHidePass(false) : setHidePass(true)}
                >
                    <Image
                        style={styles.seeHidePass}
                        source={
                            hidePass == true
                                ? seePassword
                                : hidePassword
                        }
                        resizeMode="center"
                    />
                </TouchableWithoutFeedback>
            }
            {
                search &&
                <Image style={styles.searchIcon} source={searchIcon}/>
            }
        </View>
    );
}

export default TextField;