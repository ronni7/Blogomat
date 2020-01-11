import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostReport} from "../../model/PostReport";
import {TestHttpServiceService} from "../test-http-service.service";

@Component({
  selector: 'app-report-preview',
  templateUrl: './report-preview.component.html',
  styleUrls: ['./report-preview.component.scss']
})
export class ReportPreviewComponent implements OnInit {
  @Input()
  report: PostReport;
  @Output() actionEvent = new EventEmitter<number>();

  constructor(private httpService: TestHttpServiceService) {
  }

  ngOnInit() {
  }

  delete() {
    this.httpService.deletePost(this.report.postID).subscribe(response => {
      this.actionEvent.emit(1);
    });
    this.dismiss();
  }

  blockAuthor() {
    this.dismiss();
  }

  dismiss() {
    this.httpService.deleteReport(this.report.id).subscribe(response => {
      this.actionEvent.emit(3);
    });
  }
}
