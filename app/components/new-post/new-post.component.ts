import { SocketService } from './../../services/socket/socket.service';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Post } from './../../models/post';
import { Auther } from './../../models/auther';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  @ViewChild(MatExpansionPanel) panel: MatExpansionPanel;
  @Input() postId: string;
  // Post properties
  title: string;
  name: string;
  content: string;
  // Error message
  errorMsg: string;
  constructor(private socketService: SocketService) {}

  ngOnInit() {}
  
  newPost() {
    if(this.title && this.name && this.content) {
      this.panel.close();
      var post = this.createPost();
      // Update the server with the new post
      this.socketService.addPost(post);
      this.initializeMembers()
    } else {
      // Setting an error message
      this.errorMsg = 'All fileds are mandetory';
    }
  }
  
  addComment(){
    if(this.title && this.name && this.content) {
      this.panel.close();
      var comment = this.createPost();
      // Update the server with the new comment      
      this.socketService.updatePost(this.postId, comment);
      this.initializeMembers()
    } else {
      // Setting an error message
      this.errorMsg = 'All fileds are mandetory';
    }
  }

  initializeMembers() {
    // Initialize to default values
    this.title = undefined;
    this.name = undefined;
    this.content = undefined;
    this.errorMsg = '';
  }

  createPost(){
    // Creating new post
    let auther = new Auther(this.name);
    return new Post(this.title, auther, Date.now(), this.content);
  }
}
