import React from 'react';
import { Image, Text, View } from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';

import downloadIcon from '../../assets/images/icons/download.png';
import pdfdownloadIcon from '../../assets/images/icons/pdf_download.png';

import styles from './styles';

interface CertificateProps {
    title: string,
    cod?: string,
    link: (pointerInside: boolean) => void,
}

const Certificate: React.FC<CertificateProps> = (props) => {

    return (
        <View style={styles.certificate}>
            <BorderlessButton style={styles.certificateLink} onPress={props.link}/>
            <View style={styles.certificateBg}>
                <Image style={styles.pdfdownloadIcon} source={pdfdownloadIcon} />
                <Text style={styles.certificateText}>
                    {props.title}
                    {'\n'}
                    <Text style={styles.certificateTextCod}>
                        {props.cod}
                    </Text>
                </Text>
                <Image style={styles.downloadIcon} source={downloadIcon}/>
            </View>
        </View>
    )

}

export default Certificate;