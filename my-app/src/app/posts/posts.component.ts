import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../model/Post';
import {User} from '../../model/User';
import {TestHttpServiceService} from '../test-http-service.service';
import {SearchCriteria} from '../../model/SearchCriteria';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input()
  sortBy = 'publishDate';
  @Input()
  order: 'ASC' | 'DESC' = 'DESC';
  @Input()
  posts: Post[];
  @Input()
  user: User;
  @Input()
  perRow = 1;

  constructor(private httpService: TestHttpServiceService) {

  }

  ngOnInit() {
    if (this.user) {
      this.httpService.getAuthorPosts(this.user.username).subscribe(response => {
          if (response) {
            this.posts = response as Post[];
          }
        },
        error => {
          console.log('error:', error);
        }
      );
    }
    if (!this.user && !this.posts) {
      // this.posts = this.httpService.getPosts(this.searchCriteria); //todo
      if (this.sortBy && this.sortBy === 'likes') {
        this.httpService.getPostsSortedByLikes().subscribe(response => {
            if (response) {
              this.posts = response as Post[];
            }
          },
          error => {
          }
        );
      } else {
        this.httpService.getPostsSorted(this.sortBy, this.order).subscribe(response => {
            if (response) {
              this.posts = response as Post[];
            }
          },
          error => {
          }
        );
      }
    }
  }

}
