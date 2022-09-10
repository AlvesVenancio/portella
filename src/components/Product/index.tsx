import React from 'react';
import { Image, Text, View } from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';

import infoIcon from '../../assets/images/icons/info.png';

import styles from './styles';

interface ProductProps {
    title: string,
    imageURL: string,
    link: (pointerInside: boolean) => void,
    column?: Boolean;
}

const Product: React.FC<ProductProps> = (props) => {


    return (
        <View style={[styles.product, props.column && styles.productLineColumn]}>
            <BorderlessButton style={styles.productLink} onPress={props.link}/>
            <View style={[styles.productBg, props.column && styles.productBgColumn]}>
                <Image style={[styles.productImage, props.column && styles.productImageColumn]} source={{uri: props.imageURL}} />
                <Text style={styles.productText}>
                    {props.title}
                </Text>
                <Image style={[styles.productIcon, props.column && styles.productIconColumn]} source={infoIcon}/>
            </View>
        </View>
    )

}

export default Product;