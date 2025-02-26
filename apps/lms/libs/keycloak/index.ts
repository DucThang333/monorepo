/**
 * @author QuangLV
 * @description Keycloak wrapper
 */
import Keycloak from '@package/keycloak';

const keycloak = new Keycloak({
    url: import.meta.env.VITE_KEYCLOAK_URL || '',
    realm: import.meta.env.VITE_KEYCLOAK_REALM || '',
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID || '',
});
async function init(onInitCallback: () => void) {
    try {
      await keycloak.init({
        onLoad: 'check-sso',
        pkceMethod: 'S256',
        scope: 'openid profile email phone',
      });
      return onInitCallback();
    } catch (e) {
      console.error('Keycloak init failed', e);
      throw e;
    }
  }
  
  // Cập nhật token
  async function refreshToken() {
    return await keycloak.updateToken(61);
  }
  
  const getKeycloak = () => keycloak;
  const isInit = () => keycloak.didInitialize;
  
  const login = keycloak.login; // đăng nhập
  
  const logout = keycloak.logout; // đăng xuất
  
  const getToken = () => keycloak.token; // lấy token
  
  const isTokenExpired = () => keycloak.isTokenExpired(60); // lấy token
  
  const isAuthenticated = () => keycloak.authenticated; // kiểm tra trạng thái đăng nhập
  
  const getUsername = () => keycloak.tokenParsed?.realm_access; // lấy thông tin user
  
  const hasRole = (roles: string[]) =>
    roles.some((role: string) => keycloak.hasRealmRole(role)); // kiểm tra quyền
  
  const KeycloakService = {
    init,
    isInit,
    refreshToken,
    isTokenExpired,
    login,
    logout,
    isAuthenticated,
    getToken,
    getUsername,
    hasRole,
    getKeycloak,
  };
  
  export default KeycloakService;
  