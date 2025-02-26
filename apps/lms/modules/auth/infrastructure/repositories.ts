import type { IAuthRepository } from '../domain/repositories';
import KeycloakService from '~/libs/keycloak';


export class AuthRepository implements IAuthRepository {
  protected keycloakService: typeof KeycloakService;

  constructor (keycloakService: typeof KeycloakService) {
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

export const authRepository = new AuthRepository(KeycloakService);
