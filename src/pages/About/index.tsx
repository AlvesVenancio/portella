import React, { useState, } from 'react';
import { View, Text, ScrollView, Image, ImageBackground } from 'react-native';

import PageHeader from '../../components/PageHeader';

import aboutImg from '../../assets/images/quemsomos.jpg';

import styles from './styles';

const About = () => {

    return (
        <View style={styles.container}>
            <PageHeader />
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <Text style={styles.title}>
                    Quem somos
                </Text>
                <Text style={styles.text}>
                    A Portella Cabos é uma empresa que atua no Brasil com grandes parcerias no mercado internacional. 
                    {'\n\n'}
                    Com seu nascimento pioneiro há mais de 8 décadas, surgimos com intuito  de  inserir no mercado offshore e da construção civil, produtos diferenciados de altíssimo nível e um inovador plano de negócios.
                    {'\n\n'}
                    Com pesquisas de mercado realizadas constantemente, podemos oferecer produtos inovadores que superam as necessidades dos nossos clientes em todo segmento de materiais para fundeio, atracação e de movimentação e amarração de cargas. Nós da Portella Cabos, não só trabalhamos para excelência dos nossos produtos, estamos em uma busca incessante do aperfeiçoamento de todos os nossos funcionários, para que com nosso trabalho consigamos criar um elo entre nossos clientes e parceiros que seguem adquirindo nossos produtos e confiando em nós.
                </Text>
                <View style={styles.imgContainer}>
                    <ImageBackground source={aboutImg}>
                        <View style={{height: 180}}>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        </View>
    );
}

export default About;