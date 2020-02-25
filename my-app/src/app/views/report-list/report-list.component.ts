import {Component, OnInit} from '@angular/core';
import {PostReport} from '../../../model/PostReport';
import {TestHttpServiceService} from '../../../service/test-http-service.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {
  reportList: PostReport[];
  reportVisible = false;
  private actionPerformed: number;

  constructor(private httpService: TestHttpServiceService) {
    this.reloadReports();
  }

  private reloadReports() {
    this.httpService.getReports().subscribe(response => {
      if (response) {
        this.reportList = response as PostReport[];
      }
    });
  }

  ngOnInit() {
  }


  handleEvent($event: any) {
    if ($event instanceof MouseEvent) {
      $event.stopPropagation();
    } else {
      this.actionPerformed = $event;
    }
    this.reportVisible = !this.reportVisible;
    this.reloadReports();
  }

  getMessage(): string {
    if (this.reportVisible) {
      switch (this.actionPerformed) {
        case 1:
          return 'Post deleted successfully';
        case 2:
          return 'User account blocked';
        case 3:
          return 'Post deleted successfully';
        default:
          return;
      }
    }
  }

}
