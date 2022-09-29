import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    certificate: {
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
        marginBottom: 18,
    },

    certificateLink: {
        flex: 1,
        width: '100%',
        height: 100,
        position: 'absolute',
        zIndex: 999999,
    },

    pdfdownloadIcon: {
        width: '20%',
        height: '70%',
        resizeMode: 'contain',
    },
    
    downloadIcon: {
        
    },

    certificateBg: {
        borderRadius: 15,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15,
        height: 60,
    },

    certificateText: {
        color: '#070707',
        textTransform: 'uppercase',
        fontSize: 16,
        fontFamily: 'OpenSans_700Bold',
        textAlign: 'left',
        width: '60%',
    },
    
    certificateTextCod: {
        fontFamily: 'OpenSans_400Regular',
    }

})

export default styles;