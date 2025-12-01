import { LOCALSTORE_KEY } from '@left-note/constants/localstore';
import Cookies from 'js-cookie';

const EXPIRES_TIME = 30;

export const setLocalStore = (key: LOCALSTORE_KEY, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocalStore = (key: LOCALSTORE_KEY) => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(key) || null;
};

export const removeLocalStore = (key: LOCALSTORE_KEY) => {
  localStorage.removeItem(key);
};

export const setLocalStoreLongLive = (key: LOCALSTORE_KEY, value: string) => {
  Cookies.set(key, value, { expires: EXPIRES_TIME, sameSite: 'strict' });
};

export const getLocalStoreLongLive = (key: LOCALSTORE_KEY) => {
  return Cookies.get(key);
};

export const removeLocalStoreLongLive = (key: LOCALSTORE_KEY) => {
  Cookies.remove(key);
};
