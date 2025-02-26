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

export default keycloak;