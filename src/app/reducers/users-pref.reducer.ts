import { Post } from './../models/post';
// counter.ts
import { ActionReducer, Action } from '@ngrx/store';

export const UPDATE_USERS_PREF = 'UPDATE_USERS_PREF';

export interface CustomAction extends Action {
    type: string;
    payload?: any;
}
export function UsersPrefReducer(state, action: CustomAction) {
	switch (action.type) {
		case UPDATE_USERS_PREF:
			return action.payload;
		default:
			return state;
	}
}