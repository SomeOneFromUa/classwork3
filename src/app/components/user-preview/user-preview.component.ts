import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../interfaces/user';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.css']
})
export class UserPreviewComponent implements OnInit {
@Input()
user: IUser;
  constructor() { }

  ngOnInit(): void {
  }

}
