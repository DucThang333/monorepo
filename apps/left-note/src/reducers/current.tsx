const key = 'CURRENT';

enum CurrentActionType {
  SET_CURRENT = key + '/SET_CURRENT',
  RESET_CURRENT = key + '/RESET_CURRENT',
}

type CurrentState = {};

const initialState: CurrentState = {};

function current(
  state = initialState,
  action: { type: CurrentActionType; payload: Partial<CurrentState> }
) {
  switch (action.type) {
    case CurrentActionType.SET_CURRENT:
      return {
        ...state,
        ...action.payload,
      };

    case CurrentActionType.RESET_CURRENT:
      return initialState;

    default:
      return state;
  }
}

export { current, CurrentActionType };
export type { CurrentState };
