'use client';
import { makeStore } from './index';
import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';

export function ReduxProvider({
  children,
  preloadedState,
}: {
  children: ReactNode;
  preloadedState?: any;
}) {
  const storeRef = useRef(makeStore(preloadedState));
  return <Provider store={storeRef.current}>{children}</Provider>;
}
