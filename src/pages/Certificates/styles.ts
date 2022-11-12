import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native'
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e6'
    },
    containt: {
        paddingTop: 20,
        paddingHorizontal: 16,
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
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E6E6F0',
        backgroundColor: '#f1f3f2',
        color: '#6A6180',
        fontSize: 20,
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
        padding: 15,   
        marginBottom: 20,
        letterSpacing: 5
    },

    inputPlaceholder:{
        fontSize: 20,
        letterSpacing: 1
    },

    flatList: {
        flexGrow: 0, 
        height: (windowHeight * 0.23) + windowHeight,
    }

})

export default styles;