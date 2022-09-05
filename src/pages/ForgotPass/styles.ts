import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        backgroundColor: '#8257E5',
        height: 280,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerImg: {
        height: 290,
    },
    body: {
        paddingHorizontal: 32,
        paddingVertical: 22,
    },
    title: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 24,
        color: '#32264D',
        paddingTop: 20,
        paddingBottom: 5,
    },
    description: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
        color: '#32264D',
    },
    input: {
        borderRadius: 10,
        marginVertical: 25,
    },
});

export default styles;