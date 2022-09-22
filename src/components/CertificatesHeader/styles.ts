import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
    },
    
    logo: {
        width: 130,
        marginVertical: 20,
    },
    
    header: {
        backgroundColor: '#131313',
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: 90,
    },

    goBackButton: {
        width: '20%',
    },

    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'OpenSans_700Bold',
        Width: '60%',
    },
    
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '20%',
    },

});

export default styles;