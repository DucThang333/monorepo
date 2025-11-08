import { LOCALSTORE_KEY } from "@left-note/constants/localstore";

export const setLocalStore = (key: LOCALSTORE_KEY, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocalStore = (key: LOCALSTORE_KEY) => {
  return localStorage.getItem(key);
};

export const removeLocalStore = (key: LOCALSTORE_KEY) => {
  localStorage.removeItem(key);
};
