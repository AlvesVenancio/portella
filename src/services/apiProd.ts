import axios, { AxiosError } from 'axios';
import { WP_CUSTOMER_KEY, WP_CUSTOMER_SECRET, WP_BASE_URL } from '@env'

const apiProd = axios.create({ baseURL: WP_BASE_URL });

apiProd.interceptors.request.use(
    config => {
        config.params = {
            ...config.params,
            consumer_key: WP_CUSTOMER_KEY,
            consumer_secret: WP_CUSTOMER_SECRET
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

export default apiProd;