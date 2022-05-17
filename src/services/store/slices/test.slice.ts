import {CreateSlice} from '../../../types/CreateSlice.type';
import {Reducer} from '../../../types/Reducer.type';
import {GlobalState} from '../useStore';
import {Action} from '../../../types/Action.type';
import {Test} from '../actiontypes/Test.actiontype';

const initialState = {
  message: 'SuperHi',
};

type SliceState = typeof initialState;

type SliceAction = Action<Test, SliceState>;

const reducer: Reducer<SliceState, SliceAction> = (state, action) => {
  switch (action.type) {
    case 'CREATE_TEST': {
      return {
        ...state,
        message: action.payload?.message ?? state.message,
      };
    }
    default:
      return state;
  }
};

export interface TestSlice {
  testState: SliceState;
  testDispatcher: (action: SliceAction) => void;
}

export const createTestSlice: CreateSlice<GlobalState, TestSlice> = (
  set,
  get,
) => {
  return {
    testState: initialState,
    testDispatcher: action =>
      set({
        testState: reducer(get().testState, action),
      }),
  };
};
