import { User } from '@left-note/models/users';
import { StateEnum } from '@left-note/types/state';
import { removeLocalStore, removeLocalStoreLongLive } from '@left-note/localstore';
import { LOCALSTORE_KEY } from '@left-note/constants/localstore';

const key = 'AUTH';

enum AuthActionType {
  SET_AUTH = key + '/SET_AUTH',
  RESET_AUTH = key + '/RESET_AUTH',
}

type AuthState = {
  isLogin: boolean;
  user: User | null;
  state: StateEnum;
};

const initialState: AuthState = {
  isLogin: false,
  user: null,
  state: StateEnum.IDLE,
};

function auth(state = initialState, action: { type: AuthActionType; payload: Partial<AuthState> }) {
  switch (action.type) {
    case AuthActionType.SET_AUTH:
      return {
        ...state,
        ...action.payload,
      };

    case AuthActionType.RESET_AUTH:
      // remove token from local storage
      removeLocalStore(LOCALSTORE_KEY.TOKEN);
      // remove refresh token from local storage long live
      removeLocalStoreLongLive(LOCALSTORE_KEY.REFRESH_TOKEN);
      // remove user from local storage

      return initialState;

    default:
      return state;
  }
}

export { auth, AuthActionType };
export type { AuthState };
