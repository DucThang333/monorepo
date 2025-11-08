import { User } from '@left-note/models/users';

const key = 'AUTH';

enum AuthActionType {
  SET_AUTH = key + '/SET_AUTH',
  RESET_AUTH = key + '/RESET_AUTH',
  SET_LOADING = key + '/SET_LOADING',
}

type AuthState = {
  isLogin: boolean;
  user: User | null;
  isLoading: boolean;
};

const initialState: AuthState = {
  isLogin: false,
  user: null,
  isLoading: false,
};

function auth(state = initialState, action: { type: AuthActionType; payload: Partial<AuthState> }) {
  switch (action.type) {
    case AuthActionType.SET_AUTH:
      return {
        ...state,
        ...action.payload,
      };

    case AuthActionType.RESET_AUTH:
      return initialState;

    case AuthActionType.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    default:
      return state;
  }
}

export { auth, AuthActionType };
export type { AuthState };
