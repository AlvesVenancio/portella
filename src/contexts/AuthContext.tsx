import React, { createContext, ReactNode, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import qs from 'qs';
import api  from "../services/api";


    

type User = {
  email: string;
  first_name: string;
  surname: string;
}

type SignInCredentials = {
  email: string;
  password: string;
}

type AuthResponseData = {
  success: boolean;
  code?: string;
  message?: string;
}

type AuthContextData = { 
  signIn: (credentials:SignInCredentials) => Promise<AuthResponseData>;
  signOut: () => void;
  user?: User | null;
  isAuthenticated: boolean;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps){

  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(false);

  const isAuthenticated = !!user;

  useEffect(() => {

    AsyncStorage.getItem('@Portella:token').then( token =>{

      if(token){
        setLoading(true);
        api.get('/me').then( response => {
          const { email, first_name, surname } = response.data;

          setUser({ email, first_name, surname });

        }).catch( () => {
          signOut();
        }).finally( () => {
          setLoading(false);
        })
      }
    })

  }, []);

  async function signIn({ email, password }: SignInCredentials): Promise<AuthResponseData>{

    try{
      const response = await api.post('authentication/login', qs.stringify({email, password}) );
      
      const { token, refresh_token, first_name, surname } = response.data;
     
      await AsyncStorage.setItem('@Portella:token', token);
      await AsyncStorage.setItem('@Portella:refreshToken', refresh_token);
     
      setUser({ email, first_name, surname });

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      return Promise.resolve({ success: true });

    }catch( error:any ){
      const { code, message } = error.response.data;
      return Promise.reject({ success: false, code, message });
    }

  }

  async function signOut(){

    await AsyncStorage.clear();
    setUser(null);

  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#004354"}}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return(
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }} >
      {children}
    </AuthContext.Provider>
  )
}