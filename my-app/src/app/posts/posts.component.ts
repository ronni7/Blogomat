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
    if (!this.posts) {
      this.posts = this.httpService.getPosts(this.searchCriteria);
    }
    if (this.searchCriteria.tags && this.searchCriteria.tags[0]) {

    }
  }

  ngOnInit() {
  }

}
