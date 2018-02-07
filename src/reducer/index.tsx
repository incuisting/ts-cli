import { combineReducers } from 'redux';
import { RootState } from '../store/rootState';
import gameReducer from './game';
import { fetchReducer } from './fetch';
import { routerReducer } from 'react-router-redux';

export default combineReducers<RootState>({
    game: gameReducer,
    fetch: fetchReducer,
    router: routerReducer
}); 