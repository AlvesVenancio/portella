/**

 */
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import PDFReader from 'rn-pdf-reader-js'

import styles from './styles'

interface PdfViewerProps {
    title: string;
    uri: string
    onRequestClose: () => void;
}


const PdfViewer: React.FC<PdfViewerProps> = ({ title, uri, onRequestClose }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <BorderlessButton style={styles.goBackButton} onPress={onRequestClose}>
                    <Feather name="chevron-left" size={20} color="#FFFFFF" />
                </BorderlessButton>
                <Text
                    style={styles.title}
                    numberOfLines={1}
                >
                    {title}
                </Text>
            </View>
            <View style={styles.pdfContainer} >
                <PDFReader
                    source={{
                        uri,
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default PdfViewer;