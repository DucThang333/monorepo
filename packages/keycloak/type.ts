import { KeycloakLoginOptions, KeycloakLogoutOptions, KeycloakRoles } from "keycloak-js";

export type keycloakServiceType = {
    isInit: () => boolean,
    login: (options?: KeycloakLoginOptions) => Promise<void>,
    logout: (options?: KeycloakLogoutOptions) => Promise<void>,
    getToken: () => string | undefined,
    isTokenExpired: (minValidity?: number) => boolean,
    isAuthenticated: () => boolean | undefined,
    getUsername: () => KeycloakRoles | undefined,
    hasRole: (roles: string[]) => boolean,
    refreshToken: (minValidity?: number) => Promise<boolean>,
}