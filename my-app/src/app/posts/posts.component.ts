import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../model/Post';
import {User} from '../../model/User';
import {TestHttpServiceService} from '../test-http-service.service';
import {SearchCriteria} from '../search.criteria';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  searchCriteria: SearchCriteria = new SearchCriteria();
  @Input()
  user: User;

  constructor(private httpService: TestHttpServiceService) {
    this.searchCriteria.user = this.user;
    this.searchCriteria.dataPerPage = 10;
    this.searchCriteria.author = this.user;
    this.posts = this.httpService.getPosts(this.searchCriteria);
  }

  ngOnInit() {
  }

}
