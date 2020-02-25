import {Component, OnInit} from '@angular/core';
import {TestHttpServiceService} from '../../../service/test-http-service.service';
import {User} from '../../../model/User';
import {Post} from '../../../model/Post';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  user: User;
  selectedAction: number = 1;
  searchedPosts: Post[];
  preselectedTag: string;

  constructor(private httpService: TestHttpServiceService, private router: Router) {
    if (this.router.getCurrentNavigation()) {
      if (this.router.getCurrentNavigation().extras.state) {
        this.selectedAction = this.router.getCurrentNavigation().extras.state.selectedAction as number;
        this.preselectedTag = this.router.getCurrentNavigation().extras.state.searchTag as string;
      }
    }

  }


  ngOnInit() {
  }

  refreshPosts($event: Post[]) {
    this.searchedPosts = $event;
  }

  makeUser(): User {
    this.user = new User();
    this.user.id = -1;
    this.user.username = 'User1';
    this.user.sex = true;
    this.user.email = 'email@gmail.com';
    return this.user;
  }
}
