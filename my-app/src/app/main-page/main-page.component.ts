import {Component, OnInit} from '@angular/core';
import {TestHttpServiceService} from '../test-http-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private httpService: TestHttpServiceService) {
  }

  users: object;

  ngOnInit() {
    this.httpService.getUsers().subscribe(response => {
      this.users = response;
      console.log(this.users);
    });
  }

  click() {
    this.httpService.firstClick();

  }
}
