import React, { memo } from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { BorderlessButton } from 'react-native-gesture-handler';

import infoIcon from '../../assets/images/icons/info.png';

import styles from './styles';

interface ProductProps {

    title: string,
    imageURL?: string | undefined,
    link: (pointerInside: boolean) => void,
    column?: Boolean;

}

function ProductComponent ({title, imageURL, link, column}:  ProductProps): JSX.Element {

    return (
        <View style={[styles.product, column ? styles.productLineColumn : styles.productGridItem]}>
            <BorderlessButton style={styles.productLink} onPress={link}/>
            <View style={[styles.productBg, column && styles.productBgColumn]}>
                {imageURL && (
                    <Image style={[
                        styles.productImage, 
                        column && styles.productImageColumn,
                        {resizeMode: 'contain'}
                        ]} 
                        source={{uri: imageURL}} 
                    />
                )}
                {! imageURL && (
                    <FontAwesome 
                        name='image' 
                        size={37}
                        style={[
                            styles.productImage, 
                            column && styles.productImageColumn,
                            {color: '#004254'}
                        ]}
                    />
                 )}
                <Text 
                    style={[styles.productText, column && styles.productBgColumnText]} 
                    numberOfLines={2}
                >
                    {title}
                </Text>
                <Image style={[styles.productIcon, column && styles.productIconColumn]} source={infoIcon}/>
            </View>
        </View>
    )

}

export const Product = memo(ProductComponent, (prevProps, nextProps) => {
    return Object.is(prevProps, nextProps);
})