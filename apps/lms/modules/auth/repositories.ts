import {AuthRepository} from "@package/auth/repositories"
import keycloak from "~/libs/keycloak"

const authRepository = new AuthRepository(keycloak)
export {authRepository}