import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TestHttpServiceService} from '../../test-http-service.service';
import {ContactMessage} from '../../../model/ContactMessage';
import {Router} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  formGroup: FormGroup;


  constructor(private router: Router, private formBuilder: FormBuilder, private httpService: TestHttpServiceService) {
    this.formGroup = this.formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
        lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
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
      console.log(this.formGroup.value);
      this.httpService.sendContactMessage(this.formGroup.value as ContactMessage).subscribe(response => {
          return this.router.navigate(['/'], {});
        }
      );
    }
  }

  ngOnInit() {
  }

  isValid() {
    return this.formGroup.valid;
  }
}
