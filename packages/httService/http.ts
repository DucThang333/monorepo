import axios, {
    type AxiosError,
    type AxiosInstance,
    type AxiosRequestConfig,
    type AxiosResponse,
    type CreateAxiosDefaults,
} from 'axios';

export interface IHttpService {
    get: <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
    post: <T>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<T>;
    put: <T>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<T>;
    patch: <T>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig,
    ) => Promise<T>;
}

export class HttpClient implements IHttpService {
    protected axiosInstance: AxiosInstance;

    constructor (options: CreateAxiosDefaults) {
        this.axiosInstance = axios.create({
            ...options,
        });

        this.setupInterceptors();
    }

    setupInterceptors() {
        this.axiosInstance.interceptors.response.use(
            this.onFulfilled,
            this.onRejected,
        );
    }

    onFulfilled(res: AxiosResponse) {
        return res.data;
    }

    onRejected(err: AxiosError) {
        return {
            code: err.response?.status,
            message: err.message,
        };
    }

    get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.get(url, config);
    }

    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.post(url, data, config);
    }

    put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.put<T>(url, data, config).then((res) => res.data);
    }

    patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.patch(url, data, config);
    }

    delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.delete(url, config);
    }
}
