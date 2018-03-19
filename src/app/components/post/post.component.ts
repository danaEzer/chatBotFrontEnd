import { Post } from './../../models/post';
import { Component, OnInit, Input } from '@angular/core';
import { StoreActionService } from '../../services/store-action/store-action.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() isComment: boolean;

  name;
  usersPref;
  @Input() color;
  constructor(private storeAction: StoreActionService) {}
  
  ngOnInit() {
    this.storeAction.selectUserPref().subscribe(user => {
      this.name = user.name;
    });
    this.storeAction.selectAllUsersPref().subscribe(users => {
      this.usersPref = users;
    });
    
  }

}
