import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Slides from '../pages/Slides';
import StudyTabs from './BottomTabNav';
import About from '../pages/About';
import Products from '../pages/Products';
import Certificates from '../pages/Certificates';
import Categories from '../pages/Categories';
import SubCategories from '../pages/Categories/SubCategories';
import Contact from "../pages/Contact";
import CompanyServices from "../pages/CompanyServices";

export type StackParamAuthList = {
  Study: undefined;
  About: undefined;
  Products: {};
  Categories: undefined;
  SubCategories: {};
  Certificates: undefined;
  Slides: undefined;
  Contact: undefined;
  CompanyServices: undefined;
}

const { Navigator, Screen, Group } = createStackNavigator<StackParamAuthList>();


const AuthRoutes: React.FC = () => {
  return(
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }} >
      <Screen name="Study" component={StudyTabs} />
      <Screen name="About" component={About} />
      <Screen name="Categories" component={Categories} />
      <Screen name="SubCategories" component={SubCategories} />
      <Screen name="Products" component={Products} />
      <Screen name="Certificates" component={Certificates} />
      <Screen name="Slides" component={Slides} />
      <Screen name="CompanyServices" component={CompanyServices} />
      <Screen name="Contact" component={Contact} />
    </Navigator>
  </NavigationContainer>
)};

export default AuthRoutes;