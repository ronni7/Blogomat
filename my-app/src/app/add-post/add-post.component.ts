import {Component, Input, OnInit} from '@angular/core';
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
  @Input()
  data: Post;
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
    if (this.data) {
      this.formGroup.controls['title'].setValue(this.data.title);
      this.formGroup.controls['tags'].setValue(this.data.tags);
      this.formGroup.controls['backgroundImage'].setValue(this.data.backgroundImage);
      this.formGroup.controls['postContent'].setValue(this.data.postContent);
    }
  }

  isFormValid() {
    return this.formGroup.valid;
  }

  getFormData() {
    if (this.isFormValid()) {
      const data = this.formGroup.value as Post;
      const tagsString = this.formGroup.value.tags.toString().trim();
      data.tags = tagsString.split(',');
      data.publishDate = new Date();
      data.author = 'UserTest';
      return data as Post;

    }
  }

  routeToPreview() {
    return this.router.navigate(['/preview'], {
      state: {data: this.getFormData(), back: true}
    });
  }

  publish() {
    this.httpService.addPost(this.getFormData()).subscribe(response => {
      if (response) {
        console.log(response);
      }
    });
  }
}
