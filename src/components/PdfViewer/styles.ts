import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      height: '100%',
      backgroundColor: '#131313'
    },
    
    header: {
        backgroundColor: '#131313',
        paddingHorizontal:20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
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
    
    pdfContainer: {
      flex: 1,
    },

});

export default styles;