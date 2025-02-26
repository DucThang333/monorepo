export interface IAuthRepository {
  /**
   * @return {boolean} Trả về true nếu token đã được update,
   * trả về false nếu như token vẫn valid
   */
  refreshToken: (minValidity?: number) => Promise<boolean>;
  getToken: () => string | undefined;
  isAuthenticated: () => boolean | undefined;
  isTokenExpired: () => boolean;
  login: () => void;
  logout: () => void;
}
