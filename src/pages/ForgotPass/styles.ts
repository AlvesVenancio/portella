import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    body: {
        paddingHorizontal: 32,
        paddingVertical: 22,
    },
    title: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 24,
        color: '#002C36',
        paddingTop: 20,
        paddingBottom: 5,
    },
    description: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
        color: '#002C36',
    },
    input: {
        borderRadius: 10,
        marginVertical: 25,
    },
});

export default styles;