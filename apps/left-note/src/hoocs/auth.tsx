'use client';
import { getAuthState } from '@left-note/actions/auth';
import NotAuthentication from '@left-note/components/notAuthentication';
import { useAuthModal } from '@left-note/providers/auth-provider';
import { Circle } from '@package/ui/components/loading';
import React, { useEffect } from 'react';

export function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>) {
  const ComponentWithAuth = (props: P) => {
    const { isLogin, isLoading } = getAuthState();
    const { setOpenModalLogin } = useAuthModal();
    // first time need login to access page
    useEffect(() => {
      if (!isLogin && !isLoading) {
        setOpenModalLogin(true);
      }
    }, [isLogin, isLoading]);

    // if loading, return loading content
    if (true) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <Circle size={50} />
        </div>
      );
    }

    // if not login, return not authentication content
    if (!isLogin) {
      return <NotAuthentication />;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
}
