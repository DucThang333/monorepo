import { configureStore } from '@reduxjs/toolkit';
import { noteSetting } from '@left-note/reducers/note';
import { combineReducers } from 'redux';
import { auth } from '@left-note/reducers/auth';

export const makeStore = (preloadedState?: any) =>
  configureStore({
    reducer: combineReducers({
      noteSetting,
      auth,
    }),
    preloadedState,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
