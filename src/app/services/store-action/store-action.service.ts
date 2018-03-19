import { Injectable } from '@angular/core';
import { AppState } from './../../reducers/appStore';
import { Post } from '../../models/post'
import { Auther } from '../../models/auther'
import { Store } from '@ngrx/store';
import { GET_POSTS, NEW_POST, DELETE_POST } from './../../reducers/posts.reducer';
import { UPDATE_NAME } from '../../reducers/user-name.reducer';
import { UPDATE_USERS_PREF } from '../../reducers/users-pref.reducer';

@Injectable()
export class StoreActionService {
    posts;
    constructor(private store: Store<AppState>) { 
        this.selectPosts().subscribe(posts => {
            this.posts = posts;
        });
    }

    addNewPost(post: any) {
        this.store.dispatch({ type: NEW_POST, payload: post });
    }
    updateAllPosts(posts: Array<any>) {
        this.store.dispatch({ type: GET_POSTS, payload: posts });
    }
    private deletePost(postId) {
        this.store.dispatch({ type: DELETE_POST, payload: postId });
    }
    addCommentToPost(postId: string, newPost: Post) {
        // var post = this.getPost(postId);
        // post.setComment(newPost);
        this.deletePost(postId)
        this.addNewPost(newPost);
    }

    getPost(postId): Post {
        var post;
        for (let i = 0; i < this.posts.length; i++) {
            if(this.posts[i].id === postId) {
                post = this.posts[i];
                break;
            }
            
        }
        return post;
    }

    selectPosts(){
        return this.store.select('posts');
    }

    selectUserPref(){
        return this.store.select('userPref');
    }
    updateUserName(userName, color) {
        var obj = {
            name: userName,
            color: color
        }
        this.store.dispatch({ type: UPDATE_NAME, payload: obj });
    }

    updateAllUserPres(users) {
        this.store.dispatch({ type: UPDATE_USERS_PREF, payload: users });
    }
    selectAllUsersPref(){
        return this.store.select('usersPref');
    }
}
