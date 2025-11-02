'use client';
import { getAuthState } from '@left-note/actions/auth';
import NotAuthentication from '@left-note/components/notAuthentication';
import { useAuthModal } from '@left-note/providers/login-provider';
import React, { useEffect } from 'react';

export function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>) {
  const ComponentWithAuth = (props: P) => {
    const { isLogin } = getAuthState();
    const { setOpenModalLogin } = useAuthModal();
    // first time need login to access page
    useEffect(() => {
      if (!isLogin) {
        setOpenModalLogin(true);
      }
    }, []);

    // if not login, return not contain content
    if (!isLogin) {
      return <NotAuthentication />;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
}
