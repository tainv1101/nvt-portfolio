// lib/axios.ts
import axios, { AxiosError } from 'axios';

// Tạo 1 axios instance
const APIRequest = axios.create({
  baseURL: 'https://randomuser.me/api/',
  timeout: 10000, // timeout sau 10s
});

// Request Interceptor (nếu muốn add token, headers)
APIRequest.interceptors.request.use(
  (config) => {
    // Ví dụ: add Authorization
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor (Handle lỗi tập trung)
APIRequest.interceptors.response.use(
  (response) => {
    // Nếu API bạn có kiểu { success: false } => handle tại đây luôn
    if (response.data && response.data.success === false) {
      return Promise.reject(new Error(response.data.message || 'API Error'));
    }
    return response;
  },
  (error: AxiosError) => {
    let message = 'Something went wrong';

    if (error.response) {
      message = (error.response.data as any)?.message || error.response.statusText || message;
    } else if (error.request) {
      message = 'Network error. Please try again.';
    } else {
      message = error.message;
    }

    // console.error('Axios Interceptor Error:', message);

    // You can even show toast here if you want, but better delegate to component
    return Promise.reject(new Error(message));
  }
);

export default APIRequest;
