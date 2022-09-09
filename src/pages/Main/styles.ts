import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#004354',
    },
    containerBg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: windowWidth,
        paddingBottom: 100,
    },
    headerImg: {
        width: 160,
        height: 70,
        position: 'absolute',
        top: '50%',
        marginTop: -35,
    },
    buttonsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        maxWidth: '100%',
    },
    button: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginHorizontal: 32,
    },
    buttonBorder: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'white',
        borderStyle: 'solid',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: 'OpenSans_700Bold',
        fontSize: 18,
        color: 'white',
    },
    buttonRegister: {
        marginTop: 20,
        backgroundColor: 'white',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginHorizontal: 32,
        borderRadius: 8,
    },
    buttonTextRegister: {
        fontFamily: 'OpenSans_700Bold',
        fontSize: 18,
        color: '#004354',
    },
});

export default styles;