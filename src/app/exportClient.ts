import axios from 'axios';
import { getBerthToken } from '../common/utils/auth';

export const exportClient = axios.create({
  baseURL: `${process.env.REACT_APP_BERTH_API_URL}exports`,
  timeout: 30000,
});

exportClient.interceptors.request.use(
  (config) => {
    const token = getBerthToken();
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
