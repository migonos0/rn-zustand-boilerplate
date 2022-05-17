import {RestEndpoint} from './RestEndpoint.type';
import {Action} from './Action.type';

export type ActionHandler<Type extends string, Payload, Input> = (
  restEndpoint?: RestEndpoint,
) => (
  dispatcher: (action: Action<Type, Payload>) => void,
) => (input: Input) => Promise<void> | void;
