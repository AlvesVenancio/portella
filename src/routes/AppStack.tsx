import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPass from '../pages/ForgotPass';
import Slides from '../pages/Slides';
import About from '../pages/About';
import Products from '../pages/Products';
import Certificates from '../pages/Certificates';

import StudyTabs from './StudyTabs';

const { Navigator, Screen } = createStackNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Main" component={Main} />
                <Screen name="Study" component={StudyTabs} />
                <Screen name="About" component={About} />
                <Screen name="Products" component={Products} />
                <Screen name="Certificates" component={Certificates} />
                <Screen name="Login" component={Login} />
                <Screen name="Slides" component={Slides} />
                <Screen name="Register" component={Register} />
                <Screen name="ForgotPass" component={ForgotPass} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;