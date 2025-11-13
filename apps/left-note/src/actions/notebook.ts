import { AppDispatch } from "@left-note/deps/store";
import http from "@left-note/deps/axios";
import { NoteBook } from "@left-note/models/notebooks";
import { NoteBookActionType } from "@left-note/reducers/notebook";
import { StateEnum } from "@left-note/types/state";
import { useSelector } from "react-redux";
import { RootState } from "@left-note/deps/store";

type GetNotebooksResponse = {
  notebooks: NoteBook[];
}

export const getNotebooks = (dispatch: AppDispatch) => {
  dispatch({ type: NoteBookActionType.SET_NOTEBOOK, payload: { state: StateEnum.LOADING } });
  return http.get<GetNotebooksResponse>('/v1/notebook').then((res) => {
    dispatch({ type: NoteBookActionType.SET_NOTEBOOK, payload: { state: StateEnum.SUCCESS, notebooks: res.data.notebooks.sort((a, b) => a.title.localeCompare(b.title)) } });
    return res;
  }).catch((err) => {
    dispatch({ type: NoteBookActionType.SET_NOTEBOOK, payload: { state: StateEnum.ERROR } });
    throw Error(err);
  });
};

export type CreateNoteBookPayload = {
  title: string;
  notebook_id?:string;
  description?: string;
}

export const createNoteBook = (payload: CreateNoteBookPayload) => {
  return http.post<{notebook: NoteBook}>('/v1/notebook', payload).catch((err) => {
    throw Error(err);
  });
};


export type UpdateNoteBookPayload = {
  id: string;
  title?: string;
  notebook_id?:string | null;
  description?: string;
}
export const updateNoteBook = (payload: UpdateNoteBookPayload) => {
  return http.put<{notebook: NoteBook}>(`/v1/notebook/${payload.id}`, payload).catch((err) => {
    throw Error(err);
  });
};

export const deleteNoteBook = (id: string) => {
  return http.delete<{id: string}>(`/v1/notebook/${id}`).catch((err) => {
    throw Error(err);
  });
};

export const getNotebookState = () => {
  const notebook = useSelector((state: RootState) => state.notebook);
  return notebook
}