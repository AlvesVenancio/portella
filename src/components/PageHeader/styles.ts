import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
    },
    
    logo: {
        width: 130,
        marginVertical: 20,
    },
    
    header: {
        backgroundColor: '#004354',
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 158,
    },
    
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default styles;