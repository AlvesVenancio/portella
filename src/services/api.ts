import axios, { AxiosError } from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthTokenError } from "./errors/AuthTokenError";
import qs from 'qs';


export interface AxiosErrorResponse {
    code?: string;
}

type FailRequestQueue = {
    resolve: (token: string) => void;
    reject: (error: AxiosError) => void;
}


let isRefreshing = false;
let failRequestQueue = Array<FailRequestQueue>();

const baseURL = __DEV__ ? 'http://192.168.100.2/portella-adm/api/' : 'https://app.portellacabos.com.br/api/';
// const baseURL = 'https://app.portellacabos.com.br/api/';

const api = axios.create({ baseURL });


api.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('@Portella:token')
        if (token) {
            config.headers = { Authorization: `Bearer ${token}` }
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
);




api.interceptors.response.use(response => {
    return response;
}, (error: AxiosError<AxiosErrorResponse>) => {

    if (error.response?.status === 401) {
        if (error.response.data.code === 'token.expired') {
            const originalConfig = error.config;
            AsyncStorage.getItem('@Portella:refreshToken').then( refresh_token => {

                if (!isRefreshing) {
                    isRefreshing = true;

                    api.post('authentication/refresh', qs.stringify({ refresh_token })).then(response => {

                        const { token } = response.data;
                        AsyncStorage.setItem('@Portella:token', token);
                        AsyncStorage.setItem('@Portella:refreshToken', response.data.refresh_token);


                        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                        failRequestQueue.forEach(request => request.resolve(token));
                        failRequestQueue = [];

                    }).catch((error: AxiosError) => {
                        failRequestQueue.forEach(request => request.reject(error));
                        failRequestQueue = [];

                        // signOut();
                        console.log('signOut');
                        console.log(error.response);

                    }).finally(() => {
                        isRefreshing = false;
                    });
                }
            })

            return new Promise((resolve, reject) => {
                failRequestQueue.push({
                    resolve: (token: string) => {
                        if (originalConfig.headers) originalConfig.headers['Authorization'] = `Bearer ${token}`;

                        resolve(api(originalConfig));
                    },
                    reject: (error: AxiosError) => {
                        reject(error);
                    }
                })
            });

        } else {
console.log(['test',error.response]);
            return Promise.reject(new AuthTokenError())
        }
    }

    return Promise.reject(error);
});

export default api;
