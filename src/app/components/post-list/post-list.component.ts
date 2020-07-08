import { Component, OnInit } from '@angular/core';
import {IPost} from '../../interfaces/post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
posts: IPost[];
  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  ngOnInit(): void {
  }

}
