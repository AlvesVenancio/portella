import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    product: {
        width: '32%',
        justifyContent:'center',
        alignItems: 'center',
        marginBottom: 20,
    },

    productLink: {
        flex: 1,
        width: '100%',
        height: 100,
        position: 'absolute',
        zIndex: 999999,
    },

    productImage: {
        width: 45,
        height: 45,
        zIndex: 999,
        position: 'absolute',
        top: -10,
    },

    productBg: {
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: 80,
        justifyContent:'flex-end',
        alignItems: 'center',
        paddingBottom: 10,
        elevation: 15,
    },

    productText: {
        color: '#004354',
        textTransform: 'uppercase',
        fontSize: 10,
        fontFamily: 'Montserrat_700Bold',
    },

    productIcon: {
        display: 'none',
    },

});

export default styles;