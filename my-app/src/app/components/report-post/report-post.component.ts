import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TestHttpServiceService} from '../../../service/test-http-service.service';
import {PostReport} from '../../../model/PostReport';
import {ContextService} from "../../../service/context.service";

@Component({
  selector: 'app-report-post',
  templateUrl: './report-post.component.html',
  styleUrls: ['./report-post.component.scss']
})
export class ReportPostComponent implements OnInit {
  @Input() postID: number;
  @Output() closeEvent = new EventEmitter<boolean>();
  selectedOption = '';
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpService: TestHttpServiceService, private userService: ContextService) {
    this.formGroup = this.formBuilder.group(
      {
        subject: ['', [Validators.required]],
        customSubject: ['', [Validators.minLength(8), Validators.maxLength(4196)]],
        message: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(4196)]]
      });
  }

  ngOnInit() {
  }

  sendMessage() {
    const body: PostReport =
      new PostReport(this.postID, this.userService.getID(),
        this.formGroup.value.subject,
        this.formGroup.value.customSubject, this.formGroup.value.message);
    this.httpService.reportPost(body).subscribe(response => {
      if (response) {
        this.close(true);
      }
    });
  }

  isValid(): boolean {
    return this.formGroup.valid;
  }

  onChange($event: any) {
    this.selectedOption = $event as string;
  }

  show(): boolean {
    return this.selectedOption === 'Other';
  }

  close(reported?: boolean, $event?) {
    if ($event) {
      $event.stopPropagation();
    }
    if (reported) {
      this.closeEvent.emit(reported);
    } else {
      this.closeEvent.emit(false);
    }

  }

  dispatch($event: MouseEvent) {
    $event.stopPropagation();

  }
}
