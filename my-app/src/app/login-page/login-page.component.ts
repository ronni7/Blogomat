import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TestHttpServiceService} from "../test-http-service.service";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  formGroup: FormGroup;
  submitted = false;
  submittedCorrectly = false;

  constructor(private formBuilder: FormBuilder, private httpService: TestHttpServiceService) {
    this.formGroup = this.formBuilder.group(
      {
        login: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]]
      }
    );
  }

  ngOnInit() {
  }

  isValid() {
    return this.formGroup.valid;
  }

  onSubmit() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return; // error handling maybe ?
    }
    this.submittedCorrectly = true;
    console.log(this.formGroup.value);
    this.httpService.logIn(this.formGroup.value.login, this.formGroup.value.password).subscribe(response => {
      console.log('Authenticated', response);
    });
  }

}
