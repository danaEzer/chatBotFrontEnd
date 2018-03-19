import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { StoreActionService } from './../store-action/store-action.service';

@Injectable()
export class SocketService {
  private url = environment.apiDomain;
  private socket;
  constructor(private storeAction: StoreActionService) { }

  addPost(post){
    this.socket.emit('add-post', post);    
  }

  updatePost(postId, comment){
    var obj = {
      postId: postId,
      comment: comment
    }
    this.socket.emit('update-post', obj);    
  }

  updateUserNameColor(userName, color){
    var obj = {
      userName: userName,
      color: color
    }
    this.socket.emit('update-user', obj);    
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('post', (data) => {
        switch (data['type']) {
          case 'add-post':
            this.storeAction.addNewPost(data['text']);
            break;
          case 'user-pref':
            this.storeAction.updateAllUserPres(data['text']);
            break;
          case 'update-post':
            this.storeAction.addCommentToPost(data['text'].postId, data['text'].newPost);
            break;
        
          default:
            break;
        }
        // In case someone wants to subscribe to this function
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  
}

