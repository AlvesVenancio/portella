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
        borderRadius: 12,
        marginBottom: 30,
        paddingTop: 15,
    },

    flatList: {
        flexGrow: 0, 
        height: (windowHeight * 0.23) + windowHeight,
    }

})

export default styles;