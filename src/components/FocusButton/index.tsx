import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

import styles from './styles';

interface FocusButtonProps extends RectButtonProperties {
    text: string;
    bgColor: string;
    textColor: string;
    isLoading?: boolean;
};

const FocusButton: React.FC<FocusButtonProps> = (props) => {
    return (
        <RectButton
            {...props}
            style={[
                styles.loginButton,
                props.style,
                { backgroundColor: props.bgColor }
            ]}
        >
            { props.isLoading && (
                <View style={{position: 'absolute', left: 0, paddingStart: 15}}>
                    <ActivityIndicator/>
                </View>
            )}
            <View>
                <Text style={[styles.loginButtonText, { color: props.textColor}]}>{props.text}</Text>
            </View>
        </RectButton>
    );
}

export default FocusButton;