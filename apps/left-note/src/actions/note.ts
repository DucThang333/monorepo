import { useSelector } from "react-redux";
import { RootState } from "@left-note/deps/store";
import http from "@left-note/deps/axios";

export const getNoteSettingState = () => {
  const noteSetting = useSelector((state: RootState) => state.noteSetting);
  return noteSetting;
}

export type CreateNotePayload = {
  title: string;
  notebook_id: string;
}
export const createNote = (params: CreateNotePayload) => {
  return http.post('/v1/note', params);
}