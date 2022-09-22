import React, { useContext } from 'react';
import { View, Dimensions, Image } from 'react-native';
import PageHeader from '../../components/PageHeader';

import Carousel from 'react-native-snap-carousel';

import styles from './styles';

import PageHeaderBottomBlur from '../../components/PageHeaderBottomBlur';
import { AuthContext } from '../../contexts/AuthContext';

type Props = {
    item: {
        imgUrl: string
    }
    index: number
}

const carouselItems = [
    {
        imgUrl: 'https://www.portellacabos.com.br/images/portella_slide1.jpg'
    },
    {
        imgUrl: 'https://www.portellacabos.com.br/images/portella_slide2.jpg'
    },
];

const slider_width = Dimensions.get('window').width;

const CarouselCardItem = ({item, index}: Props) => {

    return (
        <View style={styles.cardCarousel} key={index}>
            <Image style={styles.image} source={{uri: item.imgUrl}} />
        </View>
    );

}

// Depois de installar qualquer package substituir 'invariant()' pelo código abaixo (em node_modules/react-native/index.js)
// return require('deprecated-react-native-prop-types').ColorPropType;

const Main = () => {
    const { isAuthenticated } = useContext(AuthContext);
    
    return (
        <>
            <PageHeader>
                <PageHeaderBottomBlur/>
            </PageHeader>
            <View style={styles.container}>
                <Carousel
                    data={carouselItems}
                    renderItem={CarouselCardItem}
                    sliderWidth={slider_width}
                    itemWidth={slider_width}
                    useScrollView={false}
                    autoplay={true}
                    loop={true}
                />
            </View>
        </>
    );
}


export default Main;