import { epics as obAction } from './obActions';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(
    obAction
);