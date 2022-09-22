import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';


import { StackParamList } from '../routes/AppRoutes';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProps = StackNavigationProp<StackParamList>;

export function withAuth(fn:any){
  const navigation = useNavigation<NavigationProps>();

  const { isAuthenticated } = useContext(AuthContext);
  
  if( !isAuthenticated ){
    navigation.navigate('Login');
    return;
  }
  return  () => {
    return  fn()
  }
}
