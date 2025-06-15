import axios from "axios"; 

export const apiInstance = {
  create: (configDefault) => {
    const api = axios.create(configDefault);
    
    // Interceptor tự động thêm token vào header
    api.interceptors.request.use((config) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    
    return api;
  },
};