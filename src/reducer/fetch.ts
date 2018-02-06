import { getType } from 'typesafe-actions';
import { Id, FirstName, LastName, fetchAcitons } from '../actions/fetchAction';
import { combineReducers } from 'redux';
// import { RootAction } from '../store/rootAction';

export interface FetchState {
    id: Id;
    firstName: FirstName;
    lastName: LastName;
}

export const fetchReducer = combineReducers<FetchState>({
    users: (state = {}, action) => {
        switch (action.type) {
            case getType(fetchAcitons.fetchUser):
                return {};

            case getType(fetchAcitons.fetchUserFulfilled):
                return {
                    ...state,
                    [action.payload.id]: action.payload
                };

            default:
                return state;
        }
    },
    isFetchingUser: (state = false, action) => {
        switch (action.type) {
            case getType(fetchAcitons.fetchUser):
                return true;

            case getType(fetchAcitons.fetchUserFulfilled):
            case getType(fetchAcitons.cancelFetchUser):
                return false;

            default:
                return state;
        }
    },
});
