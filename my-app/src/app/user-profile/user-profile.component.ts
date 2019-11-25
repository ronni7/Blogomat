import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  menuHidden = true;

  constructor() {
  }

  ngOnInit() {
  }

  showMenu() {
    this.menuHidden = !this.menuHidden;
  }
}
