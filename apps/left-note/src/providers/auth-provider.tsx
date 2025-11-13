'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import ModalLogin from '@left-note/components/auth/modalLogin';
import ModalRegister from '@left-note/components/auth/modalRegister';
import { getLocalStore } from '@left-note/localstore';
import { getMe } from '@left-note/actions/user';
import { useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { toast } from '@package/ui/components/sonner';
import { AuthActionType } from '@left-note/reducers/auth';
import { LOCALSTORE_KEY } from '@left-note/constants/localstore';
import { StateEnum } from '@left-note/types/state';

export const AuthContext = createContext<AuthContextType>({
  setOpenModalLogin: () => {},
  setOpenModalRegister: () => {},
});

interface AuthContextType {
  setOpenModalLogin: (open: boolean) => void;
  setOpenModalRegister: (open: boolean) => void;
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false);

  const dispatch = useDispatch();

  useQuery({
    queryKey: ['authentication'],
    queryFn: () => {
      dispatch({
        type: AuthActionType.SET_AUTH,
        payload: {
          state: StateEnum.LOADING,
        },
      });
      return getMe()
        .then((res) => {
          dispatch({
            type: AuthActionType.SET_AUTH,
            payload: {
              isLogin: true,
              state: StateEnum.SUCCESS,
              user: res.data.user,
            },
          });
          toast.success('Login successfully');
          return res.data.user;
        })
        .catch((err) => {
          dispatch({
            type: AuthActionType.SET_AUTH,
            payload: {
              state: StateEnum.ERROR,
            },
          });
          return null;
        });
    },
    enabled: !!getLocalStore(LOCALSTORE_KEY.TOKEN),
  });

  return (
    <AuthContext.Provider value={{ setOpenModalLogin, setOpenModalRegister }}>
      {children}{' '}
      <ModalLogin
        open={openModalLogin}
        onClose={() => setOpenModalLogin(false)}
      />
      <ModalRegister
        open={openModalRegister}
        onClose={() => setOpenModalRegister(false)}
      />
    </AuthContext.Provider>
  );
};

export function useAuthModal() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthModal must be used inside AuthProvider');
  }
  return context;
}
