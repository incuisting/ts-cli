import { combineEpics, Epic } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { Observable } from 'rxjs';
// import { ajax } from 'rxjs/observable/dom/ajax';

import { fetchAcitons } from '../actions/fetchAction';
import { RootAction } from '../store/rootAction';
import { RootState } from '../store/rootState';

const fakeAjax = (url: string) =>
    Observable.of({
        id: url.substring(url.lastIndexOf('/') + 1),
        firstName: 'Bilbo',
        lastName: 'Baggins'
    }).delay(1000);

const fetchUserEpic: Epic<RootAction, RootState> =
    (action$, store) => action$
        .filter(isActionOf(fetchAcitons.fetchUser))
        .mergeMap(action =>
            fakeAjax(`/api/users/${action}`)
            .map(response => fetchAcitons.fetchUserFulfilled(response))
            .takeUntil(action$.ofType('FETCH_USER_CANCELLED'))
        );

export const epics = combineEpics(fetchUserEpic);