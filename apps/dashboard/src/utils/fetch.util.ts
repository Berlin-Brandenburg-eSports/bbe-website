import axios from 'axios';
import { env } from '../configs/env.config';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = `${env.API_URL}/v1`;

export const fetcher = <T>(url: string): Promise<T> => axios.get<T>(url).then((res) => res.data);
