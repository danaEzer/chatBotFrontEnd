import { Post } from './../models/post';
// counter.ts
import { ActionReducer, Action } from '@ngrx/store';

export const UPDATE_NAME = 'UPDATE_NAME';

export interface CustomAction extends Action {
    type: string;
    payload?: any;
}
export function UserNameReducer(state = [], action: CustomAction) {
	switch (action.type) {
		case UPDATE_NAME:
			return action.payload;
		default:
			return state;
	}
}