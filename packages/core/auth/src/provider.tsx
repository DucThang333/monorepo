import React,{useState,useEffect,createContext,useContext} from "react"
import {createAuthStore} from "@package/store/auth"

const AuthContext = createContext(null);

const authStore =  createAuthStore().getState()

export const AuthProvider = ({ keycloak,children }) => {
    const [keycloakReady, setKeycloakReady] = useState(false);
    useEffect(() => {
      keycloak.init().then((authenticated) => {
        if (authenticated) {
          // setAuth
          // authStore.setAuth()
        } else {
          authStore.clearAuth()
        }
        setKeycloakReady(true);
      }).catch(() => {
        authStore.clearAuth();
        setKeycloakReady(true);
      });
    }, []);
  
    return (
      <AuthContext.Provider value={{ keycloak, keycloakReady }}>
        {children}
      </AuthContext.Provider>
    );
  };

// Hook to use authentication state
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return { ...context, ...authStore };
};
