import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    product: {
        flexDirection: 'row',
        backgroundColor: '#0f1621',
    },
    
    productCell: {
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 70,
        minHeight: 50,
    },
    
    productCellText: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 13,
        color: '#ffffff',
        textAlign: 'center',
    },

});

export default styles;