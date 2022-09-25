import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

interface ProductProps {
    
}

const ProductTableLine: React.FC<ProductProps> = (props) => {


    return (
        <View style={[styles.product]}>
            <Text>oi</Text>
        </View>
    )

}

export default ProductTableLine;