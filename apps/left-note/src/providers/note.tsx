const key = 'NOTE_SETTING';

enum NoteSettingActionType {
  SET_NOTE_SETTING = key + '/SET_NOTE_SETTING',
  RESET_NOTE_SETTING = key + '/RESET_NOTE_SETTING',
}

type NoteSettingState = {
  fixedPanel: boolean;
  isUpdate: boolean;
  noteContent: string;
  isFullScreen: boolean;
  isLocked: boolean;
};

const initialState: NoteSettingState = {
  fixedPanel: false,
  isUpdate: false,
  noteContent: '',
  isFullScreen: false,
  isLocked: false,
};

function noteSetting(
  state = initialState,
  action: { type: NoteSettingActionType; payload: Partial<NoteSettingState> }
) {
  switch (action.type) {
    case NoteSettingActionType.SET_NOTE_SETTING:
      return {
        ...state,
        ...action.payload,
      };

    case NoteSettingActionType.RESET_NOTE_SETTING:
      return initialState;

    default:
      return state;
  }
}

export { noteSetting, NoteSettingActionType };
export type { NoteSettingState };
