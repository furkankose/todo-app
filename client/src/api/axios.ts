import axios, { AxiosInstance } from 'axios';

export default (baseUrl?: string): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: baseUrl || '/',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return axiosInstance;
};
