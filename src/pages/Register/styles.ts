import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',        
        paddingVertical: 10,
        paddingTop: 20,
    },
    swiperContainer: {
        flex: 1,
        position: 'relative',
    },
    paginationStyle: {
        position: 'absolute',
        top: 0,
        height: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingHorizontal: 30,
    },
    dotStyle: {
        backgroundColor: '#c1bccc',
        borderRadius: 100,
        height: 4, 
        width: 4,
    },
    activeDotStyle: {
        backgroundColor: '#004354',
        borderRadius: 100,
        height: 4,
        width: 4,
    },
    buttonNext: {
        position: 'absolute',
        top: 0,
        left: 0,
        paddingStart: 30
    },
    Item: {
        flex: 1,
        justifyContent: 'space-evenly',
        marginHorizontal: 30,
    },
    headerItem: {
        marginBottom: 40,
    },
    title: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 32,
        color: '#002C36',
    },
    description: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
        color: '#6A6180',
    },
    formTitle: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 24,
        color: '#002C36',
        marginBottom: 20,
    },
    inputBRadiusTop: {
        borderBottomWidth: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    inputBRadiusBottom: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    focusButton: {
        marginTop: 20,
    },
});

export default styles;