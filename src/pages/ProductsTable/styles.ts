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
    
    webView: {
        height: 800,
        flex: 1,
        backgroundColor: '#e6e6e6',
    },

})

export default styles;