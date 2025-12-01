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
export const createNote = (dispatch: AppDispatch, params: CreateNotePayload) => {
  dispatch({ type: NotebookActionType.ADD_NOTE });
  return http
    .post<{ note: Note }>('/v1/note', params)
    .then((res) => {
      dispatch({
        type: NotebookActionType.ADD_NOTE_SUCCESS,
        payload: {
          notes: [res.data.note],
        },
      });
      return res;
    })
    .catch((err) => {
      dispatch({ type: NotebookActionType.ADD_NOTE_ERROR });
      throw err;
    });
};

export const getNote = (id: string) => (dispatch: AppDispatch) => {
  dispatch({ type: NotebookActionType.LOAD_NOTE });

  return http
    .get<{ note: Note }>(`/v1/note/${id}`)
    .then((res) => {
      dispatch({
        type: NotebookActionType.LOAD_NOTE_SUCCESS,
        payload: {
          notes: [res.data.note],
        },
      });

      return res;
    })
    .catch((err) => {
      dispatch({ type: NotebookActionType.LOAD_NOTE_ERROR });

      throw Error(err);
    });
};

export type UpdateNotePayload = {
  id: string;
  title?: string;
  description?: string;
  is_archived?: boolean;
  notebook_id?: string | null;
};

type UpdateNoteResponse = {
  note: Note;
};

export const updateNote = (dispatch: AppDispatch, params: UpdateNotePayload) => {
  dispatch({ type: NotebookActionType.UPDATE_NOTE });

  return http
    .put<UpdateNoteResponse>(`/v1/note/${params.id}`, params)
    .then((res) => {
      dispatch({
        type: NotebookActionType.UPDATE_NOTE_SUCCESS,
        payload: {
          notes: [res.data.note],
        },
      });

      return res;
    })
    .catch((err) => {
      dispatch({ type: NotebookActionType.UPDATE_NOTE_ERROR });

      throw Error(err);
    });
};

type DeleteNoteResponse = {
  note_ids: string[];
};

export const deleteNote = (dispatch: AppDispatch, id: string) => {
  dispatch({ type: NotebookActionType.DELETE_NOTE });

  return http
    .delete<DeleteNoteResponse>(`/v1/note/${id}`)
    .then((res) => {
      dispatch({
        type: NotebookActionType.DELETE_NOTE_SUCCESS,
        payload: {
          note_ids: res.data.note_ids,
        },
      });

      return res;
    })
    .catch((err) => {
      dispatch({ type: NotebookActionType.DELETE_NOTE_ERROR });

      throw Error(err);
    });
};
