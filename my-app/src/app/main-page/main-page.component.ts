import {Component, OnInit} from '@angular/core';
import {TestHttpServiceService} from '../test-http-service.service';
import {User} from '../../model/User';
import {Post} from '../../model/Post';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  user: User;
  selectedAction: number = 1;
  users: object; //todo delete
  searchedPosts: Post[];
  preselectedTag: string;

  constructor(private httpService: TestHttpServiceService, private router: Router) {
    if (this.router.getCurrentNavigation()) {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log('czy to działa');
        this.selectedAction = this.router.getCurrentNavigation().extras.state.selectedAction as number;
        this.preselectedTag = this.router.getCurrentNavigation().extras.state.searchTag as string;
        console.log('czy to działa, czy jest tag >', this.selectedAction);
        console.log('czy to działa, czy jest tag >', this.preselectedTag);
      }
    }
/*    this.user = new User();
    this.user.id = -1;
    this.user.username = 'User1';
    this.user.sex = true;
    this.user.email = 'email@gmail.com';*/
  }


  ngOnInit() {
    /*  //todo delete
      this.httpService.getUsers().subscribe(response => { //todo delete
        this.users = response; //todo delete
        console.log(this.users); //todo delete
      });*/
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
