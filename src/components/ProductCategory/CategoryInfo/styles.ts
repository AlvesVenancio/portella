import { StyleSheet, Dimensions } from 'react-native';

const window_width = Dimensions.get('window').width;

const styles = StyleSheet.create({

    category: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        color: '#8f9aa3',
    }
    ,
    
    subCategory: {
        fontFamily: 'Oswald_700Bold',
        fontSize: 30,
    },

    imagesScroll: {
        marginVertical: 20,
    },
    
    categoryImageContainer: {
        width: (window_width/3)-25,
        height: 100,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 2,
        marginVertical: 10,
        marginRight: 20,
    },

    categoryImageContainerImg: {
        width: '60%',
        height: '60%',
        resizeMode: 'contain',
    },

    tableScroll: {
        backgroundColor: 'white',
        borderLeftWidth: 2,
        borderLeftColor: '#0f1621',
        borderTopWidth: 2,
        borderTopColor: '#0f1621',
        marginBottom: 40,
    },

});

export default styles;