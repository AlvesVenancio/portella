import React, { useState, } from 'react';
import { View, Text, ScrollView, Image, ImageBackground } from 'react-native';

import PageHeader from '../../components/PageHeader';

import Img1 from '../../assets/images/company-services/1.jpg';
import Img2 from '../../assets/images/company-services/2.jpg';
import Img3 from '../../assets/images/company-services/3.png';
import Img4 from '../../assets/images/company-services/4.png';
import Img5 from '../../assets/images/company-services/5.jpg';

import styles from './styles';

const CompanyServices = () => {

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
                    Serviços de alta performance exclusivos Portella Cabos
                    {'\n'}
                </Text>

                <View style={styles.serviceContainer}>
                    <Text style={styles.title2}>
                        SOQUETAGEM (SOCKETING PROCEDURE)
                    </Text>
                    <View style={styles.imgContainer}>
                        <ImageBackground source={Img1}>
                            <View style={styles.serviceImg}>
                            </View>
                        </ImageBackground>
                    </View>
                    <Text style={styles.text}>
                        O procedimento de soquetagem consiste em fixar a extremidade do cabo em um dispositivo metálico vazado em formato cônico, o soquete, no qual se adiciona uma resina polimérica que cura, tornando-se rígida sem riscos de acidentes por alta temperatura. Para realizar essa metodologia, contamos com profissionais altamente treinados e aptos a realizar esse procedimento internamente ou externamente em embarcações ou plataformas marítimas.
                    </Text>

                </View>

                <View style={styles.serviceContainer}>
                    <Text style={styles.title2}>
                        INSPEÇÃO TÉCNICA (TECHNICAL INSPECTION)
                    </Text>
                    <View style={styles.imgContainer}>
                        <ImageBackground source={Img2}>
                            <View style={styles.serviceImg}>
                            </View>
                        </ImageBackground>
                    </View>
                    <Text style={styles.text}>
                        Profissionais altamente qualificados, que controlam a conformidade das características técnicas,  inspecionando por meios de ensaios mecânicos: Testes de carga e de ruptura, análises visuais, dimensionais ou ensaios não destrutivos.
                        {'\n'}
                        Esse serviço tem como intuito,  garantir todas as exigências e características técnicas para o funcionamento e segurança..
                        {'\n'}
                        Somos Aptos a emitir certificados de todos os testes e inspeções realizados
                    </Text>
                </View>

                <View style={styles.serviceContainer}>
                    <Text style={styles.title2}>
                        RECERTIFICAÇÃO DE MATERIAIS
                    </Text>
                    <View style={styles.imgContainer}>
                        <ImageBackground source={Img3}>
                            <View style={styles.serviceImg}>
                            </View>
                        </ImageBackground>
                    </View>
                    <Text style={styles.text}>
                        Declaração formal de comprovação de qualidade e conformidade dos produtos vendidos pela Portella Cabos.
                    </Text>
                </View>

                <View style={styles.serviceContainer}>
                    <Text style={styles.title2}>
                        LOCAÇÃO DE CÉLULAS DE CARGAS
                    </Text>
                    <View style={styles.imgContainer}>
                        <ImageBackground source={Img4}>
                            <View style={styles.serviceImg}>
                            </View>
                        </ImageBackground>
                    </View>
                    <Text style={styles.text}>
                        Trabalhamos com diversos modelos adequados a vários tipos de suporte e equipamento,  devidamente calibradas, para testes de Tração Estática ou Dinâmica. Entre em contato e faça sua cotação.
                    </Text>
                </View>

                <View style={styles.serviceContainer}>
                    <Text style={styles.title2}>
                        PALESTRAS TÉCNICAS
                    </Text>
                    <View style={styles.imgContainer}>
                        <ImageBackground source={Img5}>
                            <View style={styles.serviceImg}>
                            </View>
                        </ImageBackground>
                    </View>
                    <Text style={styles.text}>
                        As palestras tem por objetivo, abordar os aspectos tecnológicos, manuseio dos equipamentos e seus diferenciais que agregam valor aos equipamentos. Corpo técnico credenciados e qualificados, que abordam de forma clara e objetiva o uso de nossos equipamentos.
                    </Text>
                </View>

            </ScrollView>
        </View>
    );
}

export default CompanyServices;