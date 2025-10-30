import { useSelector } from "react-redux";
import { RootState } from "@left-note/deps/store";
import { Response } from "@left-note/models/response";
import axios from "@left-note/deps/axios";

export const getAuthState = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return auth
}

export const login = async (payload: any) => {
  const response = await axios.post('/auth/login', payload);
  return response.data;
}

export const logout = async () => {
  const response = await axios.post('/auth/logout');
  return response.data;
}


