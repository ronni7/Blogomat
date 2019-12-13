import {Component, OnInit} from '@angular/core';
import {TestHttpServiceService} from '../test-http-service.service';
import {User} from '../../model/User';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  user: User;
  selectedAction: number;

  constructor(private httpService: TestHttpServiceService) {
    this.user = new User();
    this.user.id = -1;
    this.user.username = 'dummyUser';
    this.user.sex = true;
    this.user.email = 'email@gmail.com';
  }

  users: object;

  ngOnInit() {
    this.httpService.getUsers().subscribe(response => {
      this.users = response;
      console.log(this.users);
    });
  }

}
