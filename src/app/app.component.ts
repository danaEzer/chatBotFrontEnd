import { ApiService } from './services/api/api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from './services/socket/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy   {
  title = 'Chat bot';
  
  connection;
  constructor( private apiService: ApiService, private socketService: SocketService) {}
  ngOnInit() {
    this.apiService.getPosts();
    this.connection = this.socketService.getMessages().subscribe();
  }
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
