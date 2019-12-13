import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserDetails} from '../../model/UserDetails';
import {TestHttpServiceService} from '../test-http-service.service';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: UserDetails;
  chart: Chart;
  @ViewChild('canvas', {static: true}) canvas: ElementRef;

  constructor(private httpService: TestHttpServiceService) {
    this.user = httpService.getUserDetails(1);
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
        labels: ['label1', 'label2', 'label3', 'label4', 'label5', 'label6'],
        datasets: [
          {
            label: 'Monthly Revenues For The Year',
            data: [2, 3, 5, 7, 8, 6, 7, 9, 4, 3, 0, 8],
            fill: false,
            lineTension: 0.2,
            borderColor: 'red',
            borderWidth: 1,
          }
        ],
      },
      options: {
        title: {
          text: 'Monthly Revenue',
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
    console.log(this.user);
   // this.httpService.saveUserDetails(this.user);
  }
}
