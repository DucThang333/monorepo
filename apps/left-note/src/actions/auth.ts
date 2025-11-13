import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@left-note/deps/store";
import http from "@left-note/deps/axios";
import { User } from "@left-note/models/users";
import { setLocalStore, removeLocalStore, setLocalStoreLongLive, removeLocalStoreLongLive, getLocalStoreLongLive } from "@left-note/localstore";
import { LOCALSTORE_KEY } from "@left-note/constants/localstore";
import { AuthActionType } from "@left-note/reducers/auth";
import { StateEnum } from "@left-note/types/state";

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
  refresh_token: string;
}

export const login = (payload: LoginPayload) => {
  return http.post<LoginResponse>('/v1/auth/login', payload)
}

export const logout = (dispatch: ReturnType<typeof useDispatch>) => {
  return http.post<string>('/v1/auth/logout', {
    refresh_token: getLocalStoreLongLive(LOCALSTORE_KEY.REFRESH_TOKEN),
  }).then((res) => {
    // update store
    dispatch({
      type: AuthActionType.RESET_AUTH,
    });

    return res;
  }).catch((err) => {
    dispatch({
      type: AuthActionType.SET_AUTH,
      payload: {
        isLogin: false,
        state: StateEnum.ERROR,
      },
    });
    throw Error(err);
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


