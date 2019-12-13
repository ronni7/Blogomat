import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-posts',
  templateUrl: './search-posts.component.html',
  styleUrls: ['./search-posts.component.scss']
})
export class SearchPostsComponent implements OnInit {
  @Input()
  authorLocked: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
