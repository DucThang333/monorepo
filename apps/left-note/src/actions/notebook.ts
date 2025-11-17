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
  dispatch({ type: NotebookActionType.SET_LOADING });
  return http
    .get<GetNotebooksResponse>('/v1/notebook')
    .then((res) => {
      dispatch({
        type: NotebookActionType.LOAD_NOTEBOOK,
        payload: { notebooks: res.data.notebooks },
      });

      return res;
    })
    .catch((err) => {
      dispatch({
        type: NotebookActionType.SET_ERROR,
        payload: { state: StateEnum.ERROR },
      });

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

export const createNotebook = (payload: CreateNotebookPayload) => (dispatch: AppDispatch) => {
  dispatch({ type: NotebookActionType.SET_LOADING });

  return http
    .post<CreateNotebookResponse>('/v1/notebook', payload)
    .then((res) => {
      dispatch({
        type: NotebookActionType.ADD_NOTEBOOK,
        payload: { notebooks: [res.data.notebook] },
      });

      return res;
    })
    .catch((err) => {
      dispatch({ type: NotebookActionType.SET_ERROR });

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

export const updateNotebook = (payload: UpdateNotebookPayload) => (dispatch: AppDispatch) => {
  dispatch({ type: NotebookActionType.SET_LOADING });

  return http
    .put<UpdateNotebookResponse>(`/v1/notebook/${payload.id}`, payload)
    .then((res) => {
      dispatch({
        type: NotebookActionType.UPDATE_NOTEBOOK,
        payload: { notebooks: [res.data.notebook] },
      });

      return res;
    })
    .catch((err) => {
      dispatch({ type: NotebookActionType.SET_ERROR });

      throw Error(err);
    });
};

export type DeleteNotebookResponse = {
  count: number;
  notebook_ids: string[];
};

export const deleteNotebook = (id: string) => (dispatch: AppDispatch) => {
  dispatch({ type: NotebookActionType.SET_LOADING });

  return http
    .delete<DeleteNotebookResponse>(`/v1/notebook/${id}`)
    .then((res) => {
      dispatch({
        type: NotebookActionType.DELETE_NOTEBOOK,
        payload: { notebook_ids: res.data.notebook_ids },
      });

      return res;
    })
    .catch((err) => {
      dispatch({ type: NotebookActionType.SET_ERROR });

      throw Error(err);
    });
};

export const getNotebookState = () => useSelector((state: RootState) => state.notebook);
