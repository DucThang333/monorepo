import { StateEnum } from '@left-note/types/state';
import { Notebook } from '@left-note/models/notebooks';
import { Note } from '@left-note/models/note';

const key = 'NOTEBOOK';

enum NotebookActionType {
  LOAD_NOTEBOOK = key + '/LOAD_NOTEBOOK',
  LOAD_NOTEBOOK_SUCCESS = key + '/LOAD_NOTEBOOK_SUCCESS',
  LOAD_NOTEBOOK_ERROR = key + '/LOAD_NOTEBOOK_ERROR',

  ADD_NOTEBOOK = key + '/ADD_NOTEBOOK',
  ADD_NOTEBOOK_SUCCESS = key + '/ADD_NOTEBOOK_SUCCESS',
  ADD_NOTEBOOK_ERROR = key + '/ADD_NOTEBOOK_ERROR',

  UPDATE_NOTEBOOK = key + '/UPDATE_NOTEBOOK',
  UPDATE_NOTEBOOK_SUCCESS = key + '/UPDATE_NOTEBOOK_SUCCESS',
  UPDATE_NOTEBOOK_ERROR = key + '/UPDATE_NOTEBOOK_ERROR',

  DELETE_NOTEBOOK = key + '/DELETE_NOTEBOOK',
  DELETE_NOTEBOOK_SUCCESS = key + '/DELETE_NOTEBOOK_SUCCESS',
  DELETE_NOTEBOOK_ERROR = key + '/DELETE_NOTEBOOK_ERROR',

  LOAD_NOTE = key + '/LOAD_NOTE',
  LOAD_NOTE_SUCCESS = key + '/LOAD_NOTE_SUCCESS',
  LOAD_NOTE_ERROR = key + '/LOAD_NOTE_ERROR',

  ADD_NOTE = key + '/ADD_NOTE',
  ADD_NOTE_SUCCESS = key + '/ADD_NOTE_SUCCESS',
  ADD_NOTE_ERROR = key + '/ADD_NOTE_ERROR',

  UPDATE_NOTE = key + '/UPDATE_NOTE',
  UPDATE_NOTE_SUCCESS = key + '/UPDATE_NOTE_SUCCESS',
  UPDATE_NOTE_ERROR = key + '/UPDATE_NOTE_ERROR',

  DELETE_NOTE = key + '/DELETE_NOTE',
  DELETE_NOTE_SUCCESS = key + '/DELETE_NOTE_SUCCESS',
  DELETE_NOTE_ERROR = key + '/DELETE_NOTE_ERROR',
}

type NotebookState = {
  loadNotebookState: StateEnum;
  loadNoteState: StateEnum;
  createNotebookState: StateEnum;
  createNoteState: StateEnum;
  updateNotebookState: StateEnum;
  updateNoteState: StateEnum;
  deleteNotebookState: StateEnum;
  deleteNoteState: StateEnum;

  notebooks: Notebook[];
};

const initialState: NotebookState = {
  loadNotebookState: StateEnum.IDLE,
  loadNoteState: StateEnum.IDLE,
  createNotebookState: StateEnum.IDLE,
  createNoteState: StateEnum.IDLE,
  updateNotebookState: StateEnum.IDLE,
  updateNoteState: StateEnum.IDLE,
  deleteNotebookState: StateEnum.IDLE,
  deleteNoteState: StateEnum.IDLE,

  notebooks: [],
};

type NotebookAction =
  | { type: NotebookActionType.LOAD_NOTEBOOK }
  | {
      type: NotebookActionType.LOAD_NOTEBOOK_SUCCESS;
      payload: {
        notebooks: Notebook[];
      };
    }
  | { type: NotebookActionType.LOAD_NOTEBOOK_ERROR }
  | {
      type: NotebookActionType.ADD_NOTEBOOK;
      payload: {
        notebooks: Notebook[];
      };
    }
  | {
      type: NotebookActionType.ADD_NOTEBOOK_SUCCESS;
      payload: {
        notebooks: Notebook[];
      };
    }
  | { type: NotebookActionType.ADD_NOTEBOOK_ERROR }
  | { type: NotebookActionType.ADD_NOTE }
  | {
      type: NotebookActionType.ADD_NOTE_SUCCESS;
      payload: {
        notes: Note[];
      };
    }
  | { type: NotebookActionType.ADD_NOTE_ERROR }
  | { type: NotebookActionType.UPDATE_NOTE }
  | {
      type: NotebookActionType.UPDATE_NOTE_SUCCESS;
      payload: {
        notes: Note[];
      };
    }
  | { type: NotebookActionType.UPDATE_NOTE_ERROR }
  | { type: NotebookActionType.UPDATE_NOTEBOOK }
  | {
      type: NotebookActionType.UPDATE_NOTEBOOK_SUCCESS;
      payload: {
        notebooks: Notebook[];
      };
    }
  | { type: NotebookActionType.UPDATE_NOTEBOOK_ERROR }
  | { type: NotebookActionType.DELETE_NOTE }
  | {
      type: NotebookActionType.DELETE_NOTE_SUCCESS;
      payload: {
        note_ids: string[];
      };
    }
  | { type: NotebookActionType.DELETE_NOTE_ERROR }
  | { type: NotebookActionType.DELETE_NOTEBOOK }
  | {
      type: NotebookActionType.DELETE_NOTEBOOK_SUCCESS;
      payload: {
        notebook_ids: string[];
      };
    }
  | { type: NotebookActionType.DELETE_NOTEBOOK_ERROR };

function notebook(state = initialState, action: NotebookAction) {
  switch (action.type) {
    case NotebookActionType.LOAD_NOTEBOOK:
      return {
        ...state,
        loadNotebookState: StateEnum.LOADING,
      };

    case NotebookActionType.LOAD_NOTEBOOK_SUCCESS:
      return {
        ...state,
        loadNotebookState: StateEnum.SUCCESS,
        notebooks: sortDeepNotebooks(action.payload.notebooks),
      };

    case NotebookActionType.LOAD_NOTEBOOK_ERROR:
      return {
        ...state,
        loadNotebookState: StateEnum.ERROR,
      };

    case NotebookActionType.ADD_NOTEBOOK:
      return {
        ...state,
        createNotebookState: StateEnum.LOADING,
      };

    case NotebookActionType.ADD_NOTEBOOK_SUCCESS:
      return {
        ...state,
        createNotebookState: StateEnum.SUCCESS,
        notebooks: sortNotebooks([...state.notebooks, ...sortDeepNotebooks(action.payload.notebooks)]),
      };

    case NotebookActionType.ADD_NOTEBOOK_ERROR:
      return {
        ...state,
        createNotebookState: StateEnum.ERROR,
      };

    case NotebookActionType.ADD_NOTE:
      return {
        ...state,
        createNoteState: StateEnum.LOADING,
      };
    case NotebookActionType.ADD_NOTE_SUCCESS:
      const notebooks = state.notebooks?.map((notebook) => {
        const new_notebook = action.payload.notes.find((note) => note.notebook_id === notebook.id);
        if (new_notebook) {
          return {
            ...notebook,
            notes: sortNotes([...notebook.notes, new_notebook]),
          };
        }
        return notebook;
      });

      return {
        ...state,
        createNoteState: StateEnum.SUCCESS,
        notebooks: notebooks,
      };

    case NotebookActionType.ADD_NOTE_ERROR:
      return {
        ...state,
        createNoteState: StateEnum.ERROR,
      };

    case NotebookActionType.UPDATE_NOTEBOOK:
      return {
        ...state,
        updateNotebookState: StateEnum.LOADING,
      };

    case NotebookActionType.UPDATE_NOTEBOOK_SUCCESS:
      return {
        ...state,
        updateNotebookState: StateEnum.SUCCESS,
        notebooks: state.notebooks?.map((pre_notebook) => {
          const new_notebook = action.payload.notebooks.find((notebook) => notebook.id === pre_notebook.id);
          if (new_notebook) {
            return {
              ...new_notebook,
              notes: sortNotes(new_notebook.notes),
            };
          }
          return pre_notebook;
        }),
      };

    case NotebookActionType.UPDATE_NOTEBOOK_ERROR:
      return {
        ...state,
        updateNotebookState: StateEnum.ERROR,
      };

    case NotebookActionType.UPDATE_NOTE:
      return {
        ...state,
        updateNoteState: StateEnum.LOADING,
      };

    case NotebookActionType.UPDATE_NOTE_SUCCESS:
      return {
        ...state,
        updateNoteState: StateEnum.SUCCESS,
        notebooks: state.notebooks?.map((pre_notebook) => {
          // Remove old note from notebook's notes array
          let new_notes = pre_notebook?.notes?.filter(
            (note) => !action.payload?.notes?.some((updatedNote: Note) => updatedNote.id === note.id)
          );

          // Add note to the notebook's notes array
          new_notes = [
            ...new_notes,
            ...action.payload.notes.filter((note: Note) => note.notebook_id === pre_notebook.id),
          ];

          return {
            ...pre_notebook,
            notes: new_notes,
          };
        }),
      };

    case NotebookActionType.UPDATE_NOTE_ERROR:
      return {
        ...state,
        updateNoteState: StateEnum.ERROR,
      };

    case NotebookActionType.DELETE_NOTEBOOK:
      return {
        ...state,
        deleteNotebookState: StateEnum.LOADING,
      };

    case NotebookActionType.DELETE_NOTEBOOK_SUCCESS:
      return {
        ...state,
        notebooks: state.notebooks?.filter((notebook) => !action.payload.notebook_ids.includes(notebook.id)),
        deleteNotebookState: StateEnum.SUCCESS,
      };

    case NotebookActionType.DELETE_NOTEBOOK_ERROR:
      return {
        ...state,
        deleteNotebookState: StateEnum.ERROR,
      };

    case NotebookActionType.DELETE_NOTE:
      return {
        ...state,
        deleteNoteState: StateEnum.LOADING,
      };

    case NotebookActionType.DELETE_NOTE_SUCCESS:
      return {
        ...state,
        deleteNoteState: StateEnum.SUCCESS,
        notebooks: state.notebooks?.map((pre_notebook) => {
          const deletedNoteIds = action.payload.note_ids?.filter((id) =>
            pre_notebook.notes?.some((note) => note.id === id)
          );
          if (deletedNoteIds?.length > 0) {
            return {
              ...pre_notebook,
              notes: pre_notebook.notes?.filter((note) => !deletedNoteIds.includes(note.id)),
            };
          }
          return pre_notebook;
        }),
      };

    case NotebookActionType.DELETE_NOTE_ERROR:
      return {
        ...state,
        deleteNoteState: StateEnum.ERROR,
      };

    default:
      return state;
  }
}

function sortDeepNotebooks(notebooks: Notebook[]) {
  if (!notebooks) return [];
  return notebooks
    .sort((a, b) => a?.title?.localeCompare(b?.title))
    ?.map((item) => {
      return {
        ...item,
        notes: sortNotes(item.notes),
      };
    });
}

function sortNotebooks(notebooks: Notebook[]) {
  if (!notebooks) return [];
  return notebooks.sort((a, b) => a?.title?.localeCompare(b?.title));
}

function sortNotes(notes: Note[]) {
  if (!notes) return [];
  return notes.sort((a, b) => a?.title?.localeCompare(b?.title));
}

export { notebook, NotebookActionType };
export type { NotebookState };
