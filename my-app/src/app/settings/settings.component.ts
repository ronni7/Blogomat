import {Component, OnInit} from '@angular/core';
import {Post} from '../../model/Post';
import {PersonalDataSettings} from '../../model/PersonalDataSettings';
import {ThemeService} from "../theme.service";

class SocialMedia {
  facebook: boolean;
  instagram: boolean;
  snapchat: boolean;
  twitter: boolean;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  selectedTheme: string; // todo string and use names as radio values to get name easily broh
  personalDataSettings: PersonalDataSettings;
  socialMedia: SocialMedia;

  constructor(private themeService: ThemeService) {

    this.personalDataSettings = new PersonalDataSettings();
    this.personalDataSettings.name = true;
    this.personalDataSettings.username = false;
    this.personalDataSettings.surname = true;
    this.personalDataSettings.email = false;
    this.personalDataSettings.registered = true;
    this.personalDataSettings.postsCount = false;
    this.selectedTheme = 'default';
    this.socialMedia = new SocialMedia();
    this.socialMedia.facebook = true;
    this.socialMedia.instagram = false;
    this.socialMedia.snapchat = true;
    this.socialMedia.twitter = false;

  }

  ngOnInit() {
    this.tellMe('default');
  }

  tellMe(id: string) {
    this.selectedTheme = id;
    console.log('SELECTED THEME', this.selectedTheme);
    this.themeService.setTheme(this.selectedTheme);
  }

  selectTheme(id: string) {
    return this.selectedTheme === id ? 'checked' : null;
  }
}
