'use client';

import { createContext, useContext, useState } from 'react';
import ModalLogin from '@left-note/components/auth/modalLogin';
import ModalRegister from '@left-note/components/auth/modalRegister';

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
