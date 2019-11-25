import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  @Input()
  action: number;

  constructor() {
    this.action = 3; // todo default=1
  }

  ngOnInit() {
  }

  switchAction(eventID) {
    this.action = eventID;
  }
}
