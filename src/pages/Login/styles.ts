import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        justifyContent: 'flex-start',
    },
    header: {
        backgroundColor: '#004354',
        height: 220,
        paddingBottom: 50,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    headerImg: {
        width: 120,
    },
    loginForm: {
        paddingHorizontal: 32,
        paddingTop: 30,
        paddingBottom: 10,
    },
    titleAndCreateBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Roboto_400Regular',
        color: '#002C36',
    },
    createAccountButtonText: {
        color: '#004354',
        fontSize: 12,
    },
    inputsBlock: {
        marginBottom: 10,
    },    
    inputEmail: {
        borderBottomWidth: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    inputPass: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    rememberAndPassBlock: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    forgetPassButtonText: {
        color: '#9C98A6',
        fontSize: 12,
        fontFamily: 'Roboto_400Regular',
    },
});

export default styles;