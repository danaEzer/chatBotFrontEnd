import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { NewPostComponent } from './components/new-post/new-post.component';
// Services
import { ApiService } from './services/api/api.service';
import { StoreActionService } from './services/store-action/store-action.service';
import { SocketService } from './services/socket/socket.service';
// Styles
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// Reducers
import { PostsReducer } from './reducers/posts.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsListComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ posts: PostsReducer }),
    MatButtonModule, MatCheckboxModule,
    MatCardModule, MatFormFieldModule, MatExpansionModule,
    MatInputModule, FormsModule, HttpClientModule,
  ],
  providers: [ApiService, StoreActionService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
