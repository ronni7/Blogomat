import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Post} from "../../model/Post";

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  @Input()
  action: number;
  retrievedData: Post;

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation()) {
      if (this.router.getCurrentNavigation().extras.state) {
        this.action = this.router.getCurrentNavigation().extras.state.actionID as number;
        this.retrievedData = this.router.getCurrentNavigation().extras.state.data as Post;
      } else {
        this.action = 2;
      }
    }

  }

  ngOnInit() {
  }

  switchAction(eventID) {
    this.action = eventID;
  }
}
