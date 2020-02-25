import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/User';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TestHttpServiceService} from '../../../service/test-http-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  user: User;
  formGroup: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private httpService: TestHttpServiceService) {
    this.user = new User();
    this.formGroup = this.formBuilder.group(
      {
        login: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
        username: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]],
        sex: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      }
    );
  }

  ngOnInit() {
  }

  isValid() {
    return this.formGroup.valid;
  }

  onSubmit() {
    if (this.isValid()) {
      this.httpService.register(this.formGroup.value as User).subscribe(response => {
        this.router.navigate(['/login']);
      });
    }
  }
}
