// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import Main from '../pages/Main';
// import Login from '../pages/Login';
// import Register from '../pages/Register';
// import ForgotPass from '../pages/ForgotPass';
// import Slides from '../pages/Slides';
// import About from '../pages/About';
// import Products from '../pages/Products';
// import Certificates from '../pages/Certificates';

// import StudyTabs from './StudyTabs';


// export type StackParamList = {
//     Main: undefined;
//     Study: undefined;
//     About: undefined;
//     Products: undefined;
//     Certificates: undefined;
//     Login: undefined;
//     Slides: undefined;
//     Register: undefined;
//     ForgotPass: undefined;
// }

// const { Navigator, Screen } = createStackNavigator<StackParamList>();

// const AppStack = () => {
//     return (
//         <NavigationContainer>
//             <Navigator screenOptions={{ headerShown: false }}>
//                 <Screen name="Main" component={Main} />
//                 <Screen name="Study" component={StudyTabs} />
//                 <Screen name="About" component={About} />
//                 <Screen name="Products" component={Products} />
//                 <Screen name="Certificates" component={Certificates} />
//                 <Screen name="Login" component={Login} />
//                 <Screen name="Slides" component={Slides} />
//                 <Screen name="Register" component={Register} />
//                 <Screen name="ForgotPass" component={ForgotPass} />
//             </Navigator>
//         </NavigationContainer>
//     );
// }


import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";


import { AuthContext } from "../contexts/AuthContext";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";

const AppStack = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? <AuthRoutes/> : <AppRoutes/>
  
}

export default AppStack;