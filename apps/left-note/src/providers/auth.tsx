import { User } from '@left-note/models/users';

const key = 'AUTH';

enum AuthActionType {
  SET_AUTH = key + '/SET_AUTH',
  RESET_AUTH = key + '/RESET_AUTH',
}

type AuthState = {
  isLogin: boolean;
  user: User | null;
};

const initialState: AuthState = {
  isLogin: false,
  user: null,
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

    default:
      return state;
  }
}

export { auth, AuthActionType };
export type { AuthState };
