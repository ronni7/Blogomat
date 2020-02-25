import {Component, Input, OnInit} from '@angular/core';
import {SocialMedia} from "../../../model/SocialMedia";

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  @Input()
  data: SocialMedia;

  constructor() {

  }

  ngOnInit() {

  }


}
