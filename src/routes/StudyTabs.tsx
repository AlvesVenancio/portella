import React from 'react';

import { Image, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TeacherList from '../pages/TeacherList';
import Landing from '../pages/Landing';

import empresaIcon from '../assets/images/icons/empresa.png';
import produtosIcon from '../assets/images/icons/produtos.png';
import certificadosIcon from '../assets/images/icons/certificados.png';
import servicosIcon from '../assets/images/icons/servicos.png';
import contatosIcon from '../assets/images/icons/contatos.png';

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
    }
});

const StudyTabs = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#004354',
                    height: 100,
                    paddingTop: 20,
                    paddingBottom: 20,
                }
            }}
        >
            <Screen
                name="Empresa"
                component={TeacherList}
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
                component={TeacherList}
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
                component={TeacherList}
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
                component={TeacherList}
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
                component={Landing}
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