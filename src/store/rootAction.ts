import { $call } from 'utility-types';
import { gameActions } from '../actions/gameActions';
import { fetchAcitons } from '../actions/fetchAction';

const returnsOfActions = [
    ...Object.values(gameActions),
    ...Object.values(fetchAcitons)
].map($call);

type AppAction = typeof returnsOfActions[number];

export type RootAction =
    | AppAction;