import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserDetails} from '../../model/UserDetails';
import {TestHttpServiceService} from '../test-http-service.service';
import {Chart} from 'chart.js';
import {Router} from "@angular/router";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: UserDetails;
  chart: Chart;
  @ViewChild('canvas', {static: true}) canvas: ElementRef;
  private edit: boolean = true;

  constructor(private httpService: TestHttpServiceService, private router: Router) {
    this.user = httpService.getUserDetails(1);
    if (this.router.getCurrentNavigation()) {
      if (this.router.getCurrentNavigation().extras.state) {
        this.edit = this.router.getCurrentNavigation().extras.state.edit as boolean;
        //this.edit = this.router.getCurrentNavigation().extras.state.edit as string/number/user ===this.user.ID/username;
      }
    }
    /*   if (!this.user.image)
         this.user.image = new Image(100, 100);*/
  }

  ngOnInit() {
    this.chart = this.createChart();
  }

  private createChart() {
    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Likes per month',
            data: [2, 3, 5, 7, 8, 6, 7, 9, 4, 3, 0, 8],
            fill: false,
            lineTension: 0.3,
            borderColor: 'green',
            borderWidth: 2,
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

  saveChanges() {
    this.httpService.saveUserDetails(this.user);
  }
}
