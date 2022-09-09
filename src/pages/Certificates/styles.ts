import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131313'
    },

    scrollView: {
        paddingTop: 20,
    },

    certificatesContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    resultText: {
        color: '#3c99dd',
        marginBottom: 30,
        fontFamily: 'OpenSans_700Bold',
        fontSize: 18,
    },

    inputSearch: {
        borderRadius: 12,
        marginBottom: 30,
    }

})

export default styles;