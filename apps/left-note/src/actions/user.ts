import http from "@left-note/deps/axios";
import { User } from "@left-note/models/users";


export const getUser = () => {
  return http.get<User>('/v1/user');
}

export const getMe = () => {
  return http.get<{user: User}>('/v1/user/me');
}