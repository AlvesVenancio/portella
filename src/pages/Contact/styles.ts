import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0'
    },

    scrollView: {
        paddingTop: 20,
        marginBottom: 20,
    },

    title: {
        fontFamily: 'Oswald_700Bold',
        fontSize: 30,
        marginBottom: 20
    },
    
    text: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        lineHeight: 32
    },

    imgContainer: {
        marginTop: 40
    },

    form: {
        paddingTop: 30,
        paddingBottom: 10,
    },
    
    inputsBlock: {
        marginBottom: 10,
    },    
    
    input: {
        borderBottomWidth: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 10,
    },
    

})

export default styles;