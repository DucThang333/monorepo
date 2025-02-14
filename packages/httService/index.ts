import type { AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import { HttpClient } from './http';
import { IAuthRepository } from '@package/auth/type';
/**
 * @author QuangLV
 * @description Cung cấp các phương thức HTTP GET, POST, PUT, DELETE, PATCH. Đính kèm Bearer token từ auth mỗi khi gửi request.
 */
class ApiClientClass extends HttpClient {
  protected refreshTokenRequest: Promise<unknown> | null = null;
  protected authRepository: IAuthRepository;

  constructor (options: CreateAxiosDefaults, authRepository: IAuthRepository) {
    super(options);
    this.authRepository = authRepository;
  }

  setupInterceptors(): void {
    super.setupInterceptors();
    // Đính kèm token mỗi khi gửi
    this.axiosInstance.interceptors.request.use(
      (config) => {
        if (this.authRepository.isAuthenticated()) {
          config.headers.Authorization = `Bearer ${this.authRepository.getToken()}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }
  /**
   * ❓ Chuyện gì xảy ra nếu giữa chừng token bị expired?
   *
   * Ví dụ: 3 api requests đồng thời với nhau
   * TRƯỜNG HỢP 1: Token chưa expired, vẫn còn tốt chán 🤣
   * -- req 1 -->
   * -- req 2 -->
   * -- req 3 -->
   *
   * TRƯỜNG HỢP 2: Token bị expired, sóng gió kéo tới 🥴
   * -- req 1 --> refresh token 1 --> failed
   * -- req 2 --> refresh token 2 --> failed
   * -- req 3 --> refresh token 3 --> success
   *
   * GIẢI PHÁP
   * -- req 1 --> (phát hiện token expired)
   *          -- req 2 --> (những requests đến sau phải đợi token trả về)
   *          -- req 3 --> (có bao nhiêu requests thì vẫn phải đợi)
   *
   */

  // Kiểm tra token và refresh token nếu như token hết hạn
  // async checkToken() {
  //   if (!this.authRepository.isAuthenticated()) {
  //     await this.authRepository.refreshToken();
  //   }
  //   // Ensure the token is set in the headers
  //   const token = this.authRepository.getToken();
  //   if (token) {
  //     this.axiosInstance.defaults.headers.common[
  //       'Authorization'
  //     ] = `Bearer ${token}`;
  //   }
  // }

  async checkToken() {
    if (this.authRepository.isTokenExpired()) {
      await this.authRepository.refreshToken();
    }
    // Ensure the token is set in the headers
    const token = this.authRepository.getToken();
    if (token) {
      this.axiosInstance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${token}`;
    }
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      await this.checkToken();
    } catch (error) {
      console.error('error: ', error);
    }
    return this.axiosInstance.get(url, config);
  }

  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      await this.checkToken();
    } catch (error) {
      console.error('error: ', error);
    }
    return this.axiosInstance.post(url, data, config);
  }

  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      await this.checkToken();
    } catch (error) {
      console.error('error: ', error);
    }
    return this.axiosInstance.put<T>(url, data, config).then((res) => res.data);
  }

  async patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    try {
      await this.checkToken();
    } catch (error) {
      console.error('error: ', error);
    }
    return this.axiosInstance.patch(url, data, config);
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      await this.checkToken();
    } catch (error) {
      console.error('error: ', error);
    }
    return this.axiosInstance.delete(url, config);
  }

  async postFormData(url: string, data: any) {
    try {
      await this.checkToken();
    } catch (error) {
      console.error('error: ', error);
    }
    return this.axiosInstance.post(url, data, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
  }
}

export { ApiClientClass };
