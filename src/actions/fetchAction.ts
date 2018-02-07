import { createAction } from 'typesafe-actions';

export type Id = string;
export type FirstName = string;
export type LastName = string;

export type Payload = {
    id: Id,
    firstName: FirstName,
    lastName: LastName,
};

export const fetchAcitons = {
    cancelFetchUser: createAction('FETCH_USER_CANCELLED'),
    fetchUser: createAction('FETCH_USER',
        (id: Id) => ({
            type: 'FETCH_USER',
            payload: {
                id
            }
        })
    ),
    fetchUserFulfilled: createAction(
        'FETCH_USER_FULFILLED',
        (
            res: Payload
        ) => ({
            type: 'FETCH_USER_FULFILLED',
            payload: {
                ...res
            }
        })
    )
};