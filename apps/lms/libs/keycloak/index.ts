/**
 * @author QuangLV
 * @description Keycloak wrapper
 */
import Keycloak from '@package/keycloak';

const keycloak = new Keycloak({
    url: process.env.REACT_APP_KEYCLOAK_URL || '',
    realm: process.env.REACT_APP_KEYCLOAK_REALM || '',
    clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID || '',
});

export default keycloak;