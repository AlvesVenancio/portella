import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../pages/Main';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPass from '../pages/ForgotPass';

export type StackParamList = {
  Main: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPass: undefined;
}


const { Navigator, Screen } = createStackNavigator<StackParamList>();
const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }} initialRouteName='Main'>
      <Screen name="Main" component={Main} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="ForgotPass" component={ForgotPass} />
    </Navigator>
  </NavigationContainer>
);

export default AppRoutes;