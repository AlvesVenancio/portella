import React from 'react';
import { View, Image, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CategoryTableHead from '../CategoryTableHead';
import ProductTableLine from '../ProductTableLine';

import styles from './styles';

interface categoryInfoProps {
    category: string,
    subCategory: string,
    categoryImages: {
        imgUrl: string
    }[]
}

const categoryInfo: React.FC<categoryInfoProps> = (props) => {

    return (
        <View>
            <View>
                <Text style={styles.category}>{props.category}</Text>
                <Text style={styles.subCategory}>{props.subCategory}</Text>
            </View>
            <ScrollView
                style={styles.imagesScroll}
                horizontal
            >
                {props.categoryImages.map((image, index) => (
                    <View key={index} style={styles.categoryImageContainer}>
                        <Image style={styles.categoryImageContainerImg} source={{uri: image.imgUrl}} />
                    </View>
                ))}

            </ScrollView>
        </View>
    );
}


export default categoryInfo;