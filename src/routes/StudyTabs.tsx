import React from 'react';

import { Image, StyleSheet, Dimensions } from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';

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
import Categories from '../pages/Categories';
import SubCategories from '../pages/Categories/SubCategories';

const Stack = createStackNavigator();

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



const ProductStack = () => {
    return(
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="SubCategories" component={SubCategories} />
        <Stack.Screen name="Products" component={Products} />
        <Screen name="ProductsTable" component={ProductsTable} /> 
    </Stack.Navigator>
    );
  }

const StudyTabs = () => {
    return (
        <Navigator

            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#004354',
                    height: 100,
                    paddingTop: 20,
                    paddingBottom: 20,
                },
                tabBarBackground: () => (
                    <Image source={navBg} style={styles.navBg}/>
                ),
                tabBarButton: [
                  "Slides",
                ].includes(route.name)
                  ? () => {
                      return null;
                    }
                  : undefined,
              })}

        >

            <Screen 
                name="Slides" 
                component={Slides} 
                options={{
                    tabBarIcon: () => null
                }}
            />
            <Screen
                name="Empresa"
                component={About}
                options={{
                    tabBarLabel: 'Empresa',
                    tabBarLabelStyle: styles.tabStyle,
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image 
                                source={empresaIcon} 
                                style={ [styles.tabImages, focused ? {tintColor: '#fff'} : {}  ] } 
                            />
                        );
                    }
                }}
            />
            <Screen
                name="Produtos"
                component={ProductStack}
                options={{
                    tabBarLabel: 'Produtos',
                    tabBarLabelStyle: styles.tabStyle,
                    tabBarIcon: ({focused}) => {
                        return (
                            <Image 
                                source={produtosIcon} 
                                style={ [styles.tabImages, focused ? {tintColor: '#fff'} : {}  ] } 
                            />
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
                            <Image 
                                source={certificadosIcon} 
                                style={ [styles.tabImages, focused ? {tintColor: '#fff'} : {}  ] } 
                            />
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
                            <Image 
                                source={servicosIcon}
                                style={ [styles.tabImages, focused ? {tintColor: '#fff'} : {}  ] } 
                            />
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
                            <Image 
                                source={contatosIcon} 
                                style={ [styles.tabImages, focused ? {tintColor: '#fff'} : {}  ] } 
                            />
                        );
                    }
                }}
            />
        </Navigator>
    )
}

export default StudyTabs;