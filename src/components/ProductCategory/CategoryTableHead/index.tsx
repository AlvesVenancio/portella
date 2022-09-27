import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

interface CategoryTableHeadProps {
    tableHead: {
        a: string,
        b: string,
        c: string,
        d: string,
        e: string,
        f: string,
        g: string,
        h: string,
        i: string,
        j: string,
    }[]
}

const CategoryTableHead: React.FC<CategoryTableHeadProps> = (props) => {

    return (
        props.tableHead.map((product, index) => (
            <View key={index} style={styles.product}>
                <View style={styles.productCell}>
                    <Text style={styles.productCellText}>{product.a}</Text>
                </View>
                <View style={styles.productCell}>
                    <Text style={styles.productCellText}>{product.b}</Text>
                </View>
                <View style={styles.productCell}>
                    <Text style={styles.productCellText}>{product.c}</Text>
                </View>
                <View style={styles.productCell}>
                    <Text style={styles.productCellText}>{product.d}</Text>
                </View>
                <View style={styles.productCell}>
                    <Text style={styles.productCellText}>{product.e}</Text>
                </View>
                <View style={styles.productCell}>
                    <Text style={styles.productCellText}>{product.f}</Text>
                </View>
                <View style={styles.productCell}>
                    <Text style={styles.productCellText}>{product.g}</Text>
                </View>
                <View style={styles.productCell}>
                    <Text style={styles.productCellText}>{product.h}</Text>
                </View>
                <View style={styles.productCell}>
                    <Text style={styles.productCellText}>{product.i}</Text>
                </View>
                <View style={styles.productCell}>
                    <Text style={styles.productCellText}>{product.j}</Text>
                </View>
            </View>
        ))
    )

}

export default CategoryTableHead;