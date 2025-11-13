'use client';
import { getAuthState } from '@left-note/actions/auth';
import { NotAuthentication } from '@left-note/components/notAuthentication';
import { useAuthModal } from '@left-note/providers/auth-provider';
import { Circle } from '@package/ui/components/loading';
import React from 'react';
import { StateEnum } from '@left-note/types/state';
import { ErrorInternalServer } from '@left-note/components/error';

export function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>) {
  const ComponentWithAuth = (props: P) => {
    const { isLogin, state } = getAuthState();
    const { setOpenModalLogin } = useAuthModal();

    // if loading, return loading content
    if (state === StateEnum.LOADING || state === StateEnum.IDLE) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <Circle size={50} />
        </div>
      );
    }

    // if error, return error content
    if (state === StateEnum.ERROR) {
      return <ErrorInternalServer />;
    }

    // if not login, return not authentication content
    if (!isLogin) {
      setOpenModalLogin(true);
      return <NotAuthentication />;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
}
