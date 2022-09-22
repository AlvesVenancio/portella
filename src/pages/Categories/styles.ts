import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e6'
    },

    scrollView: {
        paddingTop: 20,
    },

    flatList: {
        height: '100%',
        paddingTop: 20,
    },

    productsContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    headerContainer: {
        marginTop: 10,
        paddingHorizontal: 20
    },
    textSecondary: {
        color: '#888',
        fontWeight: '500'
    },


})

export default styles;