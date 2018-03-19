import { ApiService } from './services/api/api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from './services/socket/socket.service';
import { StoreActionService } from './services/store-action/store-action.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy   {
  title = 'Chat bot';
  userName;
  isSubmitted;
  connection;
  colorOption;
  constructor( private apiService: ApiService, private socketService: SocketService, private storeAction: StoreActionService) {}
  ngOnInit() {
    this.apiService.getPosts();
    this.connection = this.socketService.getMessages().subscribe();
  }
  updateUserName(){
    if(this.userName && this.colorOption) {
      this.isSubmitted = true;
      // console.log(this.colorOption)
      this.storeAction.updateUserName(this.userName, this.colorOption);
      this.socketService.updateUserNameColor(this.userName, this.colorOption);
    }
  }
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
