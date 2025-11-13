import { StateEnum } from '@left-note/types/state';
import { NoteBook } from '@left-note/models/notebooks';

const key = 'NOTEBOOK';

enum NoteBookActionType {
  SET_NOTEBOOK = key + '/SET_NOTEBOOK',
  RESET_NOTEBOOK = key + '/RESET_NOTEBOOK',
}

type NoteBookState = {
  state: StateEnum;
  notebooks: NoteBook[];
};

const initialState: NoteBookState = {
  state: StateEnum.IDLE,
  notebooks: [],
};

function notebook(
  state = initialState,
  action: { type: NoteBookActionType; payload: Partial<NoteBookState> }
) {
  switch (action.type) {
    case NoteBookActionType.SET_NOTEBOOK:
      return {
        ...state,
        ...action.payload,
      };

    case NoteBookActionType.RESET_NOTEBOOK:
      return initialState;

    default:
      return state;
  }
}

export { notebook, NoteBookActionType };
export type { NoteBookState };
