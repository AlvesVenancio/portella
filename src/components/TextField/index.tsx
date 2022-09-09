import React, { useState } from 'react';

import { View, Text, TextInput, Image, TouchableWithoutFeedback, TextInputProps } from 'react-native';

import seePassword from '../../assets/images/icons/see-password.png';
import hidePassword from '../../assets/images/icons/hide-password.png';
import searchIcon from '../../assets/images/icons/search_icon.png';

import styles from './styles';

interface TextFieldProps extends TextInputProps {
    label?: String;
    focus: Boolean;
    search?: Boolean;
}

const TextField: React.FC<TextFieldProps> = (props) => {

    const [hidePass, setHidePass] = useState<boolean>(true);

    return (
        <View style={[styles.container, props.style]}>
            <Text
                style={[
                    styles.placeHolder,
                    props.focus || props.value ? styles.placeHolderFocus : {},
                    props.search ? {
                        color: '#8f9aa3',
                        fontSize: 16,
                    } : {},
                ]}
            >
                {props.label}
            </Text>
            {props.focus && <View style={styles.dash} />}
            <TextInput
                style={[styles.input, props.search ? {borderColor: 'transparent'} : {}, props.focus || props.value ? styles.inputFocus : {}]}
                value={props.value}
                onChangeText={props.onChangeText}
                keyboardType={props.keyboardType}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                secureTextEntry={props.secureTextEntry && hidePass}
                autoCorrect={false}
            />
            {
                props.secureTextEntry &&
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
                props.search &&
                <Image style={styles.searchIcon} source={searchIcon}/>
            }
        </View>
    );
}

export default TextField;