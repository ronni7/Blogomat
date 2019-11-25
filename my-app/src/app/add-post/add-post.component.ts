import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TestHttpServiceService} from '../test-http-service.service';
import {Router} from '@angular/router';
import {Post} from "../../model/Post";


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private httpService: TestHttpServiceService) {
    this.formGroup = this.formBuilder.group(
      {
        title: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
        tags: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(256)]],
        backgroundImage: [''],
        postContent: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(4196)]]
      });
  }

  ngOnInit() {
  }

  isFormValid() {
    return this.formGroup.valid;
  }

  getFormData() {
    if (this.isFormValid()) {
      const data = this.formGroup.value as Post;
      const tagsString = this.formGroup.value.tags.toString().trim();
      data.tags = tagsString.split(',');
      return data as Post;
    }
  }

  routeToPreview() {
   return this.router.navigate(['/preview'], {
      state: {data: this.getFormData()}
    });
  }
  showPreview()
  {
    
  }
}
