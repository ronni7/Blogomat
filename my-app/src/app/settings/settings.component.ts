import {Component, OnInit} from '@angular/core';
import {Post} from "../../model/Post";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  selectedTheme: string;
  mockedPost: Post;

  constructor() {
    this.mockedPost = new Post(-1, 'Przykładowy tytuł', ['tag1', 'tag2', 'tag3'], null, 'Lorem Ipsum...', new Date(), 'userFromContext');
  }

  ngOnInit() {
  }

  onChange($event: any) {
    this.selectedTheme = $event;
  }
}
