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
        width: 40,
        height: 40,
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
        paddingHorizontal: 5,
    },

    productIcon: {
        display: 'none',
    },

    productLineColumn: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between',
    },

    productGridItem: {
        width: '33.3%',
        paddingHorizontal: 10,
        marginBottom: 30,
    },

    productBgColumn: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingBottom: 0,
        height: 60,
    },

    productBgColumnText: {
        width: '70%'
    },


    productImageColumn: {
        position: 'relative',
        top: 0,
    },

    productIconColumn: {
        display: 'flex',
    }

});

export default styles;