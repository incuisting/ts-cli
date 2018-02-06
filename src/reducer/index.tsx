import { combineReducers } from 'redux';
import { RootState } from '../store/rootState';
import gameReducer from './game';
import { fetchReducer } from './fetch';

export default combineReducers<RootState>({
    game: gameReducer,
    fetch: fetchReducer
}); 