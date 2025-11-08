import { useSelector } from "react-redux";
import { RootState } from "@left-note/deps/store";
import http from "@left-note/deps/axios";
import { User } from "@left-note/models/users";
import { removeLocalStore } from "@left-note/localstore";
import { LOCALSTORE_KEY } from "@left-note/constants/localstore";

export const getAuthState = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return auth
}



type LoginPayload = {
  email: string;
  password: string;
}

type LoginResponse = {
  user: User;
  token: string;
}

export const login = (payload: LoginPayload) => {
  return http.post<LoginResponse>('/v1/auth/login', payload);
}

export const logout = () => {
  return http.post<string>('/v1/auth/logout').then((res) => {
    if(res.success) {
      // remove token from local storage
      removeLocalStore(LOCALSTORE_KEY.TOKEN);
      return res;
    }
    return res;
  });
}

export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
}

export const register = (payload: RegisterPayload) => {
  return http.post<User>('/v1/auth/register', payload);
}


