import { epics as obAction } from './obActions';
import { combineEpics } from 'redux-observable';

/**
 * redux-observalbe 的epic合并
 */
export const rootEpic = combineEpics(
    obAction
);