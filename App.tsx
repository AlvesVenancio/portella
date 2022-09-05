import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as AppLoading from 'expo-splash-screen';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat'

import AppStack from './src/routes/AppStack';

AppLoading.preventAutoHideAsync();

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return null;
  } else {
    AppLoading.hideAsync();
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}