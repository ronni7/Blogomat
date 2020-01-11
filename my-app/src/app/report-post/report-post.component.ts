import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TestHttpServiceService} from '../test-http-service.service';
import {PostReport} from '../../model/PostReport';

@Component({
  selector: 'app-report-post',
  templateUrl: './report-post.component.html',
  styleUrls: ['./report-post.component.scss']
})
export class ReportPostComponent implements OnInit {
  @Input() postID: number;
  @Output() closeEvent = new EventEmitter<boolean>();
  selectedOption = 0;
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpService: TestHttpServiceService) {
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
    console.log(this.postID);
    console.log('zglaszajacy'); // id zglaszajacego, z serwisu z ckontekstem uzytkownika
    console.log(this.formGroup.value);
    const body: PostReport =
      new PostReport(this.postID, 1,
        this.formGroup.value.subject,
        this.formGroup.value.customSubject, this.formGroup.value.message);
    this.httpService.reportPost(body).subscribe(response => {
      if (response) {
        //dialog here
        this.close(true);
      }
    });
  }

  isValid(): boolean {
    return this.formGroup.valid;
  }

  onChange($event: any) {
    this.selectedOption = $event as number;
  }

  show(): boolean {
    return this.selectedOption.toString() === '5';
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
