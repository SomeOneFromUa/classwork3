import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import {PostService} from './services/post.service';
import {CommentService} from './services/comment.service';
import {UserListComponent} from './components/user-list/user-list.component';
import { UserPreviewComponent } from './components/user-preview/user-preview.component';
import {MatCardModule} from '@angular/material/card';
import { UserPageComponent } from './components/user-page/user-page.component';
import { PostComponent } from './components/post/post.component';
import {MatButtonModule} from '@angular/material/button';
import { CommentComponent } from './components/comment/comment.component';
import { PostListComponent } from './components/post-list/post-list.component';

const routes: Routes = [
  {path: '', component: UserListComponent},
  {path: 'user/:id', component: UserPageComponent},
  {path: 'posts', component: PostListComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    UserPreviewComponent,
    UserListComponent,
    UserPageComponent,
    PostComponent,
    CommentComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [UserService, PostService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
