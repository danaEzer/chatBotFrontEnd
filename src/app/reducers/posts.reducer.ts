import { Post } from './../models/post';
// counter.ts
import { ActionReducer, Action } from '@ngrx/store';

export const NEW_POST = 'NEW_POST';
export const GET_POSTS = 'GET_POSTS';
export const DELETE_POST = 'SELETE_POST';

export interface CustomAction extends Action {
    type: string;
    payload?: any;
}
export function PostsReducer(state = [], action: CustomAction) {
	switch (action.type) {
		case NEW_POST:
			return [action.payload, ...state];
		case DELETE_POST:
			var posts = state.filter(post => post.id !== action.payload);
			const newPost = Object.assign([], posts);
			return newPost;
		case GET_POSTS:
			return action.payload;
		default:
			return state;
	}
}