import { Component, OnInit } from '@angular/core';
import { StoreActionService } from '../../services/store-action/store-action.service';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts = [];
  constructor(private storeAction: StoreActionService) { }

  ngOnInit() {
    this.storeAction.selectPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

}
