import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../model/Comment';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {
  @Input()
  comments: Comment[];

  constructor() {

  }

  ngOnInit() {
  }

}
