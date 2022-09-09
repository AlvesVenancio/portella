import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFC',
        position: 'relative',
    },
    input: {
        borderWidth: 1,
        borderColor: '#E6E6F0',
        color: '#6A6180',
        fontSize: 12,
        fontFamily: 'Roboto_400Regular',
        padding: 15,        
    },
    inputFocus: {
        paddingTop: 25,
        paddingBottom: 5,
    },
    placeHolder: {
        position: 'absolute',
        top: 21,
        left: 15,
        fontSize: 12,
        fontFamily: 'Roboto_400Regular',
        color: '#9C98A6',
    },
    placeHolderFocus: {
        fontSize: 10,
        top: 14,
    },
    dash: {
        position: 'absolute',
        left: 1,
        top: 12,
        height: 36,
        width: 2,
        backgroundColor: '#002C36',
        borderRadius: 100,
    },
    seeHidePass: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 24,
        paddingRight: 55,
        height: 60,
    },
    searchIcon: {
        position: 'absolute',
        top: '50%',
        right: 0,
        marginTop: -9,
        width: 18,
        height: 18,
        paddingRight: 55,
        resizeMode: 'contain',
    },
});

export default styles;