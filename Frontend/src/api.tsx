import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

export default AxiosInstance;
