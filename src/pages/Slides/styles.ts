import { StyleSheet, Dimensions } from 'react-native';

const ViewerHeight = Dimensions.get('window').height;
const slider_width = Dimensions.get('window').width;

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        marginTop: -200,
        zIndex: -1,
    },
    cardCarousel: {
        width: Math.round( slider_width * 1.2),
    },
    image: {
        height: ViewerHeight,
    },
});

export default styles;