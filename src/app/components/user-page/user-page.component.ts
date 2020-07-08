import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../../interfaces/user';
import {IPost} from '../../interfaces/post';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
user: IUser;
posts: IPost[];
  constructor(private userService: UserService, private postService: PostService, private activatedRoute: ActivatedRoute) {
    const id: number = this.activatedRoute.snapshot.params.id;
    this.userService.getUser(id).subscribe(user => this.user = user);
    this.postService.getPostsForUser(id).subscribe(posts => this.posts = posts);
  }

  ngOnInit(): void {
  }

}
