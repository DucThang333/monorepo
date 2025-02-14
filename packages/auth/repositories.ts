import { IAuthRepository } from './type';
import { keycloakServiceType } from "@package/keycloak/type";


export class AuthRepository implements IAuthRepository {
  protected keycloakService: keycloakServiceType;

  constructor (keycloakService: keycloakServiceType) {
    this.keycloakService = keycloakService;
  }
  login() {
    return this.keycloakService.login();
  }
  logout() {
    return this.keycloakService.logout();
  }

  isTokenExpired() {
    return this.keycloakService.isTokenExpired();
  }

  isAuthenticated() {
    return this.keycloakService.isAuthenticated();
  }

  getToken() {
    return this.keycloakService.getToken();
  }

  refreshToken() {
    return this.keycloakService.refreshToken();
  }
}

export default AuthRepository;
