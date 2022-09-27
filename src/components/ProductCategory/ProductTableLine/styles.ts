import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    product: {
        borderBottomWidth: 2,
        borderBottomColor: '#0f1621',
        flexDirection: 'row',
    },
    
    productCell: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 2,
        borderColor: '#0f1621',
        minWidth: 60,
        minHeight: 50,
    },
    
    productCellText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 13,
        color: '#7a7a7a',
        textAlign: 'center',
    },

});

export default styles;