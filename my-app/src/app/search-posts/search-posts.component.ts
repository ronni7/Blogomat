import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../model/Post";

@Component({
  selector: 'app-search-posts',
  templateUrl: './search-posts.component.html',
  styleUrls: ['./search-posts.component.scss']
})
export class SearchPostsComponent implements OnInit {
  @Input()
  authorLocked: boolean;
  private posts: Post[];

  constructor() {
  }

  ngOnInit() {
  }

  refreshPosts($event: Post[]) {
    this.posts = $event;
  }

}
