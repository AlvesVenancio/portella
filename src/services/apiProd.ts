import axios, { AxiosError } from 'axios';
// import { WP_CUSTOMER_KEY, WP_CUSTOMER_SECRET, WP_BASE_URL } from '@env'

const apiProd = axios.create({ baseURL: process.env.WP_BASE_URL });

apiProd.interceptors.request.use(
    config => {
        config.params = {
            ...config.params,
            consumer_key: process.env.WP_CUSTOMER_KEY,
            consumer_secret: process.env.WP_CUSTOMER_SECRET
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

export default apiProd;