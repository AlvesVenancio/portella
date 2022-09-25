import React from 'react';

import { Image, StyleSheet, Dimensions } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import About from '../pages/About';
import Products from '../pages/Products';
import ProductsTable from '../pages/ProductsTable';
import Certificates from '../pages/Certificates';
import Slides from '../pages/Slides';

import empresaIcon from '../assets/images/icons/empresa.png';
import produtosIcon from '../assets/images/icons/produtos.png';
import certificadosIcon from '../assets/images/icons/certificados.png';
import servicosIcon from '../assets/images/icons/servicos.png';
import contatosIcon from '../assets/images/icons/contatos.png';
import navBg from '../assets/images/navigation-tab-background.png';

var width = Dimensions.get('window').width; //full width

const { Navigator, Screen } = createBottomTabNavigator();

const styles = StyleSheet.create({
    tabImages: {
        width: 30,
        height: 30
    },
    tabStyle: {
        color: 'white',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 10,
        textTransform: 'uppercase',
    },
    navBg: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: width
    }
});

const StudyTabs = () => {
    return (
        <Navigator
            initialRouteName='Contatos'
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#004354',
                    height: 100,
                    paddingTop: 20,
                    paddingBottom: 20,
                },
                tabBarBackground: () => (
                    <Image source={navBg} style={styles.navBg}/>
                )
            }}
        >
            <Screen
                name="Empresa"
                component={About}
                options={{
                    tabBarLabel: 'Empresa',
                    tabBarLabelStyle: styles.tabStyle,
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image source={empresaIcon} style={styles.tabImages} />
                        );
                    }
                }}
            />
            <Screen
                name="Produtos"
                component={Products}
                options={{
                    tabBarLabel: 'Produtos',
                    tabBarLabelStyle: styles.tabStyle,
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image source={produtosIcon} style={styles.tabImages} />
                        );
                    }
                }}
            />
            <Screen
                name="Certificados"
                component={Certificates}
                options={{
                    tabBarLabel: 'Certificados',
                    tabBarLabelStyle: styles.tabStyle,
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image source={certificadosIcon} style={styles.tabImages} />
                        );
                    }
                }}
            />
            <Screen
                name="Servicos"
                component={About}
                options={{
                    tabBarLabel: 'Serviços',
                    tabBarLabelStyle: styles.tabStyle,
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image source={servicosIcon} style={styles.tabImages} />
                        );
                    }
                }}
            />
            <Screen
                name="Contatos"
                component={Slides}
                options={{
                    tabBarLabel: 'Contatos',
                    tabBarLabelStyle: styles.tabStyle,
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image source={contatosIcon} style={styles.tabImages} />
                        );
                    }
                }}
            />
        </Navigator>
    )
}

export default StudyTabs;