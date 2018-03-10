import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Post } from '../../models/post'
import { Auther } from '../../models/auther'
import { StoreActionService } from './../store-action/store-action.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {
  domain = environment.apiDomain;
  postsPath = '/posts'
  
  constructor(private storeAction: StoreActionService, private http: HttpClient) { }
  createOptions(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return httpOptions;
  }
  getPosts(){
    const httpOptions = this.createOptions();

    this.http.get(this.domain + this.postsPath, httpOptions).subscribe(
      res => {
        if(res && Array.isArray(res)) {
          this.storeAction.updateAllPosts(res);
        }
        console.log('getPosts', res)
      },
      error => {
        console.log('error', error);
    });
  }
}
