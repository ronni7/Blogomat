import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TestHttpServiceService} from "../test-http-service.service";
import {ContactMessage} from "../../model/ContactMessage";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpService: TestHttpServiceService) {
    this.formGroup = this.formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
        lastName: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
        email: ['', [Validators.required, Validators.email]],
        subject: ['', [Validators.required]],
        message: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(4196)]]
      }
    );
  }

  isFormValid() {
    return this.formGroup.valid;
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.httpService.sendContactMessage(this.formGroup.value as ContactMessage);
    }
  }

  ngOnInit() {
  }

}
