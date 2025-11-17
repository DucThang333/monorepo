import { StateEnum } from '@left-note/types/state';
import { Notebook } from '@left-note/models/notebooks';
import { Note } from '@left-note/models/note';

const key = 'NOTEBOOK';

enum NotebookActionType {
  LOAD_NOTEBOOK = key + '/LOAD_NOTEBOOK',
  ADD_NOTEBOOK = key + '/ADD_NOTEBOOK',
  UPDATE_NOTEBOOK = key + '/UPDATE_NOTEBOOK',
  DELETE_NOTEBOOK = key + '/DELETE_NOTEBOOK',
  ADD_NOTE = key + '/ADD_NOTE',
  UPDATE_NOTE = key + '/UPDATE_NOTE',
  DELETE_NOTE = key + '/DELETE_NOTE',
  RESET_NOTEBOOK = key + '/RESET_NOTEBOOK',
  SET_LOADING = key + '/SET_LOADING',
  SET_ERROR = key + '/SET_ERROR',
  LOAD_NOTE = key + '/LOAD_NOTE',
}

type NotebookState = {
  state: StateEnum;
  notebooks: Notebook[];
};

const initialState: NotebookState = {
  state: StateEnum.IDLE,
  notebooks: [],
};

type NotebookAction =
  | {
      type: NotebookActionType.LOAD_NOTEBOOK;
      payload: {
        notebooks: Notebook[];
      };
    }
  | {
      type: NotebookActionType.SET_LOADING;
      payload: {
        state: StateEnum;
      };
    }
  | {
      type: NotebookActionType.SET_ERROR;
      payload: {
        state: StateEnum;
      };
    }
  | {
      type: NotebookActionType.ADD_NOTEBOOK;
      payload: {
        notebooks: Notebook[];
      };
    }
  | {
      type: NotebookActionType.ADD_NOTE;
      payload: {
        notes: Note[];
      };
    }
  | {
      type: NotebookActionType.RESET_NOTEBOOK;
    }
  | {
      type: NotebookActionType.UPDATE_NOTE;
      payload: {
        notes: Note[];
      };
    }
  | {
      type: NotebookActionType.UPDATE_NOTEBOOK;
      payload: {
        notebooks: Notebook[];
      };
    }
  | {
      type: NotebookActionType.DELETE_NOTE;
      payload: {
        note_ids: string[];
      };
    }
  | {
      type: NotebookActionType.DELETE_NOTEBOOK;
      payload: {
        notebook_ids: string[];
      };
    };

function notebook(state = initialState, action: NotebookAction) {
  switch (action.type) {
    case NotebookActionType.SET_LOADING:
      return {
        ...state,
        state: StateEnum.LOADING,
      };

    case NotebookActionType.LOAD_NOTEBOOK:
      return {
        ...state,
        state: StateEnum.SUCCESS,
        notebooks: sortNotebooks(action.payload.notebooks)?.map((item) => {
          return {
            ...item,
            notes: sortNotes(item.notes),
          };
        }),
      };

    case NotebookActionType.ADD_NOTEBOOK:
      return {
        ...state,
        state: StateEnum.SUCCESS,
        notebooks: state.notebooks?.map((notebook) => {
          const new_notebook = action.payload.notebooks.find((notebook) => notebook.id === notebook.id);
          if (new_notebook) {
            return {
              ...notebook,
              notes: sortNotes(new_notebook.notes),
            };
          }
          return notebook;
        }),
      };

    case NotebookActionType.ADD_NOTE:
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
        state: StateEnum.SUCCESS,
        notebooks: notebooks,
      };

    case NotebookActionType.UPDATE_NOTEBOOK:
      return {
        ...state,
        state: StateEnum.SUCCESS,
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

    case NotebookActionType.UPDATE_NOTE:
      return {
        ...state,
        state: StateEnum.SUCCESS,
        notebooks: state.notebooks?.map((pre_notebook) => {
          if (action.payload.notes.some((note) => note.notebook_id === pre_notebook.id)) {
            return {
              ...pre_notebook,
              notes: sortNotes(
                pre_notebook.notes?.map((pre_note) => {
                  const new_note = action.payload.notes.find((note) => note.id === pre_note.id);
                  if (new_note) return new_note;
                  return pre_note;
                })
              ),
            };
          }
          return pre_notebook;
        }),
      };

    case NotebookActionType.DELETE_NOTEBOOK:
      console.log(action.payload.notebook_ids);
      console.log(
        state.notebooks?.filter((notebook) => {
          console.log(notebook.id);
          return !action.payload.notebook_ids.includes(notebook.id);
        })
      );
      return {
        ...state,
        state: StateEnum.SUCCESS,
        notebooks: state.notebooks?.filter((notebook) => !action.payload.notebook_ids.includes(notebook.id)),
      };

    case NotebookActionType.DELETE_NOTE:
      return {
        ...state,
        state: StateEnum.SUCCESS,
        notebooks: state.notebooks?.map((pre_notebook) => {
          if (pre_notebook.id === action.payload.note_ids.find((note_id) => note_id === pre_notebook.id)) {
            return {
              ...pre_notebook,
              notes: sortNotes(pre_notebook.notes?.filter((note) => !action.payload.note_ids.includes(note.id))),
            };
          }
          return pre_notebook;
        }),
      };

    case NotebookActionType.SET_ERROR:
      return {
        ...state,
        state: StateEnum.ERROR,
      };

    case NotebookActionType.RESET_NOTEBOOK:
      return initialState;

    default:
      return state;
  }
}

function sortNotebooks(notebooks: Notebook[]) {
  return notebooks.sort((a, b) => a?.title?.localeCompare(b?.title));
}

function sortNotes(notes: Note[]) {
  return notes.sort((a, b) => a?.title?.localeCompare(b?.title));
}

export { notebook, NotebookActionType };
export type { NotebookState };
