import { AppDispatch } from '@left-note/deps/store';
import http from '@left-note/deps/axios';
import { Notebook } from '@left-note/models/notebooks';
import { NotebookActionType } from '@left-note/reducers/notebook';
import { StateEnum } from '@left-note/types/state';
import { useSelector } from 'react-redux';
import { RootState } from '@left-note/deps/store';

type GetNotebooksResponse = {
  notebooks: Notebook[];
};

export const getNotebooks = () => (dispatch: AppDispatch) => {
  dispatch({ type: NotebookActionType.LOAD_NOTEBOOK });
  return http
    .get<GetNotebooksResponse>('/v1/notebook')
    .then((res) => {
      dispatch({
        type: NotebookActionType.LOAD_NOTEBOOK_SUCCESS,
        payload: { notebooks: res.data.notebooks },
      });

      return res;
    })
    .catch((err) => {
      dispatch({ type: NotebookActionType.LOAD_NOTEBOOK_ERROR });

      throw Error(err);
    });
};

export type CreateNotebookPayload = {
  title: string;
  notebook_id?: string;
  description?: string;
};

export type CreateNotebookResponse = {
  notebook: Notebook;
};

export const createNotebook = (dispatch: AppDispatch, payload: CreateNotebookPayload) => {
  dispatch({ type: NotebookActionType.ADD_NOTEBOOK });

  return http
    .post<CreateNotebookResponse>('/v1/notebook', payload)
    .then((res) => {
      dispatch({
        type: NotebookActionType.ADD_NOTEBOOK_SUCCESS,
        payload: { notebooks: [res.data.notebook] },
      });

      return res;
    })
    .catch((err) => {
      dispatch({ type: NotebookActionType.ADD_NOTEBOOK_ERROR });

      throw Error(err);
    });
};

export type UpdateNotebookPayload = {
  id: string;
  title?: string;
  notebook_id?: string | null;
  description?: string;
};

export type UpdateNotebookResponse = {
  notebook: Notebook;
};

export const updateNotebook = (dispatch: AppDispatch, payload: UpdateNotebookPayload) => {
  console.log('updateNotebook payload:', payload);
  dispatch({ type: NotebookActionType.UPDATE_NOTEBOOK });

  return http
    .put<UpdateNotebookResponse>(`/v1/notebook/${payload.id}`, payload)
    .then((res) => {
      dispatch({
        type: NotebookActionType.UPDATE_NOTEBOOK_SUCCESS,
        payload: { notebooks: [res.data.notebook] },
      });

      return res;
    })
    .catch((err) => {
      dispatch({ type: NotebookActionType.UPDATE_NOTEBOOK_ERROR });

      throw Error(err);
    });
};

export type DeleteNotebookResponse = {
  count: number;
  notebook_ids: string[];
};

export const deleteNotebook = (dispatch: AppDispatch, id: string) => {
  dispatch({ type: NotebookActionType.DELETE_NOTEBOOK });

  return http
    .delete<DeleteNotebookResponse>(`/v1/notebook/${id}`)
    .then((res) => {
      dispatch({
        type: NotebookActionType.DELETE_NOTEBOOK_SUCCESS,
        payload: { notebook_ids: res.data.notebook_ids },
      });

      return res;
    })
    .catch((err) => {
      dispatch({ type: NotebookActionType.DELETE_NOTEBOOK_ERROR });

      throw Error(err);
    });
};

export const getNotebookState = () => useSelector((state: RootState) => state.notebook);
