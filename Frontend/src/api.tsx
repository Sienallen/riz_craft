import axios from 'axios';
import { ACCESS_TOKEN } from './constants';

const PublicAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

const PrivateAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

PrivateAxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { PublicAxiosInstance, PrivateAxiosInstance };
