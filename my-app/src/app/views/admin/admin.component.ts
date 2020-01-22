import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  action: number;

  constructor() {
  }

  ngOnInit() {
    this.action = 1;
  }

  switchAction(action: number) {
    this.action = action;
  }
}
