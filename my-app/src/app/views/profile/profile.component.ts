import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserDetails} from '../../../model/UserDetails';
import {TestHttpServiceService} from '../../test-http-service.service';
import {Chart} from 'chart.js';
import {Router} from "@angular/router";
import {ContextService} from "../../../service/context.service";
import {PersonalDataSettings} from "../../../model/PersonalDataSettings";
import {SocialMediaSettings} from "../../../model/SocialMediaSettings";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userDetails: UserDetails;
  chart: Chart;
  @ViewChild('canvas', {static: true}) canvas: ElementRef;
  private edit: boolean = true;
  private userID: number;
  private userSettings: PersonalDataSettings;
  private socialMediaSettings: SocialMediaSettings;

  constructor(private userService: ContextService, private httpService: TestHttpServiceService, private router: Router) {
  }

  ngOnInit() {
    this.userID = this.userService.getID();
    if (this.router.getCurrentNavigation()) {
      if (this.router.getCurrentNavigation().extras.state) {
        this.edit = this.router.getCurrentNavigation().extras.state.edit as boolean;
        this.userID = this.router.getCurrentNavigation().extras.state.userID as number;
      }
    }
    this.chart = this.createChart();
    this.userDetails = this.httpService.getUserDetails(1);
    /*
  this.httpService.getUserDetails(1).subscribe(response => {
    if (response) {
      this.userDetails = response as UserDetails;
    }
  });*/
    this.httpService.getUserSettings(this.userID).subscribe(response => {
      if (response) {
        this.userSettings = response as PersonalDataSettings;
      }
    });
    this.httpService.getSocialMediaSettings(this.userID).subscribe(response => {
      if (response) {
        this.socialMediaSettings = response as SocialMediaSettings;
      }
    });
    this.loadSocialMedia();


  }

  private loadSocialMedia() {
    this.httpService.getUserSocialMedia('Author1').subscribe(response => {
      if (response) {
        this.userDetails.facebook = response.facebook;
        this.userDetails.twitter = response.twitter;
        this.userDetails.snapchat = response.snapchat;
        this.userDetails.instagram = response.instagram;
      }
    });
  }

  saveChanges() {
    this.httpService.saveUserDetails(this.userDetails);
  }

  saveSocialMediaChanges() {
    this.httpService.saveSocialMedia(this.collectSocialMedia()).subscribe(response => {
      if (response) {
        this.loadSocialMedia();
      }
    });
  }

  private getMonthName(date: Date, months: number): number {
    if (date.getMonth() - months < 0) {
      return 12 - (date.getMonth() + months);
    } else {
      return date.getMonth() - months;
    }


  }

  private createChart() {
    const date = new Date();
    const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const labels = new Array<string>();
    for (let i = 6; i > 0; i--) {
      labels.push(months[this.getMonthName(date, i - 1)]);
    }
    console.log(labels, 'daty');
    this.chart = new Chart(this.canvas.nativeElement, {


      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Likes per month',
            data: [0, 0, 0, 0, 3, 2],
            fill: true,
            lineTension: 0.5,
            borderColor: '#c011ff',
            borderWidth: 4
          }
        ],
      },
      options: {
        title: {
          text: 'Statistics',
          display: true
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      },
    });
  }


  private collectSocialMedia() {

    return {
      userID: this.userID,
      facebook: this.userDetails.facebook,
      instagram: this.userDetails.instagram,
      twitter: this.userDetails.twitter,
      snapchat: this.userDetails.snapchat,
    };
  }
}
