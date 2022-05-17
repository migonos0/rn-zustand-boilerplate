import {ActionHandler} from '../../../types/ActionHandler.type';
import {Test} from '../actiontypes/Test.actiontype';
import {GlobalState} from '../useStore';

export const createTestActionHandler: ActionHandler<
  Test,
  GlobalState['testState'],
  string
> = () => dispatcher => input => {
  try {
    dispatcher({
      type: 'CREATE_TEST',
      payload: {
        message: input,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
