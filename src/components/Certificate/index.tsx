import React from 'react';
import { ActivityIndicator, Alert, Image, Text, View } from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';

import downloadIcon from '../../assets/images/icons/download.png';
import pdfdownloadIcon from '../../assets/images/icons/pdf_download.png';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

interface CertificateProps {
    title: string,
    cod?: string,
    icon: "download" | "view",
    onPress: (pointerInside: boolean) => void,
    loading: boolean | undefined
}

const Certificate: React.FC<CertificateProps> = (props) => {

 
    return (
        <View style={styles.certificate}>
            <BorderlessButton style={styles.certificateLink} onPress={props.onPress}/>
            <View style={styles.certificateBg}>
                <Image style={styles.pdfdownloadIcon} source={pdfdownloadIcon} />
                <Text style={styles.certificateText}>
                    {props.title}
                    {'\n'}
                    <Text style={styles.certificateTextCod}>
                        {props.cod}
                    </Text>
                </Text>
                
                {props.loading && <ActivityIndicator size="small" color="gray" />}

                {( ! props.loading && props.icon == 'download') && ( 
                    <Image style={styles.downloadIcon} source={downloadIcon}/>
                )}
                
                {( ! props.loading && props.icon == 'view') && ( 
                    <Feather name="eye" size={20} color="#00b7fc" />
                )}

            </View>
        </View>
    )

}

export default Certificate;