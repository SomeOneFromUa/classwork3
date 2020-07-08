import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../interfaces/post';
import {CommentService} from '../../services/comment.service';
import {IComment} from '../../interfaces/comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input()
post: IPost;
comments: IComment[];
isOpen = false;
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments(this.post.id).subscribe(value => this.comments = value);
  }
onClick = () => {
    this.isOpen = !this.isOpen;
}
}
