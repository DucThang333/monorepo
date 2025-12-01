import ENV from '@left-note/config/env';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Response } from '@left-note/models/response';
import { getLocalStore } from '@left-note/localstore';
import { LOCALSTORE_KEY } from '@left-note/constants/localstore';

const instance = axios.create({
  baseURL: ENV.API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${getLocalStore(LOCALSTORE_KEY.TOKEN)}`,
  },
  withCredentials: true,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

async function get<T = any>(url: string, config?: AxiosRequestConfig): Promise<Response<T>> {
  const response: AxiosResponse<Response<T>> = await instance.get(url, config);
  return response.data;
}

// Custom POST method
async function post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Response<T>> {
  const response: AxiosResponse<Response<T>> = await instance.post(url, data, config);
  return response.data;
}

// Custom PUT (usually for full update)
async function put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Response<T>> {
  const response: AxiosResponse<Response<T>> = await instance.put(url, data, config);
  return response.data;
}

// Custom PATCH (for partial update)
async function patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Response<T>> {
  const response: AxiosResponse<Response<T>> = await instance.patch(url, data, config);
  return response.data;
}

// Custom DELETE
async function del<T = any>(url: string, config?: AxiosRequestConfig): Promise<Response<T>> {
  const response: AxiosResponse<Response<T>> = await instance.delete(url, config);
  return response.data;
}

const http = {
  get,
  post,
  put,
  patch,
  delete: del,
};

export default http;
