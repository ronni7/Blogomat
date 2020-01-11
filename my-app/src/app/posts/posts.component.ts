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
  sortBy: string = 'publishDate';
  @Input()
  order: 'ASC' | 'DESC' = 'DESC';
  @Input()
  posts: Post[];
  searchCriteria: SearchCriteria = new SearchCriteria(); // todo delete
  @Input()
  user: User;
  @Input()
  perRow = 1;

  constructor(private httpService: TestHttpServiceService) {
    // this.searchCriteria.user = this.user;
    // this.searchCriteria.dataPerPage = 10;
    //  this.searchCriteria.author = this.user.username;

  }

  ngOnInit() {
    if (!this.posts) {
      console.log('sortByu', this.sortBy);
      // this.posts = this.httpService.getPosts(this.searchCriteria); //todo
      if (this.sortBy && this.sortBy === 'likes') {
        console.log('udalo sie');
        this.httpService.getPostsSortedByLikes().subscribe(response => {
            if (response) {
              this.posts = response as Post[];
            }
          },
          error => {
            console.log('error:', error);
          }
        );
      } else {
        this.httpService.getPostsSorted(this.sortBy, this.order).subscribe(response => {
            if (response) {
              this.posts = response as Post[];
            }
          },
          error => {
            console.log('error:', error);
          }
        );
      }
    }
  }

}
