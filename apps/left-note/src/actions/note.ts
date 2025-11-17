import { useSelector } from 'react-redux';
import { RootState } from '@left-note/deps/store';
import http from '@left-note/deps/axios';
import { Note } from '@left-note/models/note';
import { AppDispatch } from '@left-note/deps/store';
import { NotebookActionType } from '@left-note/reducers/notebook';

export const getNoteSettingState = () => {
  const noteSetting = useSelector((state: RootState) => state.noteSetting);
  return noteSetting;
};

export type CreateNotePayload = {
  title: string;
  notebook_id: string;
};
export const createNote = (params: CreateNotePayload) => (dispatch: AppDispatch) => {
  return http.post<{ note: Note }>('/v1/note', params);
};

export const getNote = (id: string) => (dispatch: AppDispatch) => {
  dispatch({ type: NotebookActionType.SET_LOADING });

  return http
    .get<{ note: Note }>(`/v1/note/${id}`)
    .then((res) => {
      dispatch({
        type: NotebookActionType.UPDATE_NOTE,
        payload: {
          notes: [res.data.note],
        },
      });

      return res;
    })
    .catch((err) => {
      dispatch({ type: NotebookActionType.SET_ERROR });

      throw Error(err);
    });
};

export type UpdateNotePayload = {
  id: string;
  title: string;
  description?: string;
  is_archived?: boolean;
};

type UpdateNoteResponse = {
  note: Note;
};

export const updateNote = (params: UpdateNotePayload) => (dispatch: AppDispatch) => {
  return http
    .put<UpdateNoteResponse>(`/v1/note/${params.id}`, params)
    .then((res) => {
      dispatch({
        type: NotebookActionType.UPDATE_NOTE,
        payload: {
          notes: [res.data.note],
        },
      });

      return res;
    })
    .catch((err) => {
      dispatch({ type: NotebookActionType.SET_ERROR });

      throw Error(err);
    });
};

export type DeleteNotePayload = {
  id: string;
};

type DeleteNoteResponse = {
  note_ids: string[];
};

export const deleteNote = (params: DeleteNotePayload) => (dispatch: AppDispatch) => {
  dispatch({ type: NotebookActionType.SET_LOADING });

  return http
    .delete<DeleteNoteResponse>(`/v1/note/${params.id}`)
    .then((res) => {
      dispatch({
        type: NotebookActionType.DELETE_NOTE,
        payload: {
          note_ids: res.data.note_ids,
        },
      });

      return res;
    })
    .catch((err) => {
      dispatch({ type: NotebookActionType.SET_ERROR });

      throw Error(err);
    });
};
