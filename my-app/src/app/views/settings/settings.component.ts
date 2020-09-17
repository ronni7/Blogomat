import {Component, OnInit} from '@angular/core';
import {PersonalDataSettings} from '../../../model/PersonalDataSettings';
import {ThemeService} from "../../../service/theme.service";
import {TestHttpServiceService} from "../../../service/test-http-service.service";
import {ContextService} from "../../../service/context.service";
import {SocialMediaSettings} from "../../../model/SocialMediaSettings";
import {ThemeTO} from "../../../model/ThemeTO";


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  selectedTheme: string;
  personalDataSettings: PersonalDataSettings;
  socialMediaSettings: SocialMediaSettings;
  userID: number;

  constructor(private userService: ContextService, private httpService: TestHttpServiceService, private themeService: ThemeService) {

    this.personalDataSettings = new PersonalDataSettings();
    this.socialMediaSettings = new SocialMediaSettings();

  }

  ngOnInit() {
    this.userID = this.userService.getID();
    if (!this.personalDataSettings.userID) {
      this.personalDataSettings.userID = this.userID;
    }
    if (!this.socialMediaSettings.userID) {
      this.socialMediaSettings.userID = this.userID;
    }
    this.httpService.getUserSettings(this.personalDataSettings.userID).subscribe(response => {
      if (response) {
        this.personalDataSettings = response as PersonalDataSettings;
      }
    });
    this.httpService.getSocialMediaSettings(this.socialMediaSettings.userID).subscribe(response => {
      if (response) {
        this.socialMediaSettings = response as SocialMediaSettings;
      }
    });
    this.httpService.getSelectedThemeName(this.userID).subscribe(response => {
      if (response) {
        this.selectedTheme = (response as ThemeTO).themeName;
      }
    });
  }

  selectTheme(id: string) {
    this.selectedTheme = id;
    this.themeService.setTheme(this.selectedTheme);
    this.saveThemeSettings();
  }

  checkActiveTheme(id: string) {
    return this.selectedTheme === id ? 'checked' : null;
  }

  saveUserSettings() {
    this.httpService.saveUserSettings(this.personalDataSettings).subscribe(response => {
      if (response) {
        return;
      }
    });
  }

  saveSocialMediaSettings() {
    this.httpService.saveSocialMediaSettings(this.socialMediaSettings).subscribe(response => {
      if (response) {
        return;
      }
    });
  }

   saveThemeSettings() {
    this.httpService.saveSelectedThemeName({
      userID: this.userID,
      themeName: this.selectedTheme
    } as ThemeTO).subscribe(response => {
      if (response) {
        return;
      }
    });
  }
}
