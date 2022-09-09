import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e6'
    },

    scrollView: {
        paddingTop: 20,
    },

    productsContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    productLine: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between',
    },

    productBg: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingBottom: 0,
        height: 60,
    },

    productImage: {
        position: 'relative',
        top: 0,
    },

    productIcon: {
        display: 'flex',
    }

})

export default styles;