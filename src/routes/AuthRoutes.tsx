import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Slides from '../pages/Slides';
import StudyTabs from './StudyTabs';
import About from '../pages/About';
import Products from '../pages/Products';
import Certificates from '../pages/Certificates';
import Categories from '../pages/Categories';
import SubCategories from '../pages/Categories/SubCategories';
import ProductsTable from "../pages/ProductsTable";

export type StackParamAuthList = {
  Study: undefined;
  About: undefined;
  Products: {};
  ProductsTable: undefined;
  Categories: undefined;
  SubCategories: {};
  Certificates: undefined;
  Slides: undefined;
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
      <Screen name="ProductsTable" component={ProductsTable} /> 
      <Screen name="Certificates" component={Certificates} />
      <Screen name="Slides" component={Slides} />
    </Navigator>
  </NavigationContainer>
)};

export default AuthRoutes;