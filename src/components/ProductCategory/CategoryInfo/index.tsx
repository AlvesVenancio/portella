import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

interface categoryInfoProps {
    category: string,
    subCategory: string
}

const categoryInfo: React.FC<categoryInfoProps> = (props) => {

    return (
        <View>
            <View>
                <Text style={styles.category}>{props.category}</Text>
                <Text style={styles.subCategory}>{props.subCategory}</Text>
            </View>
        </View>
    );
}


export default categoryInfo;