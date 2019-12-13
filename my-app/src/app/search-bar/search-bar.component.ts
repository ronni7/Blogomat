import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TestHttpServiceService} from '../test-http-service.service';
import {Post} from '../../model/Post';
import {SearchCriteria} from '../../model/SearchCriteria';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  dropped = false;
  @Input()
  authorLocked: boolean;
  formGroup: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private httpService: TestHttpServiceService) {
    this.formGroup = this.formBuilder.group(
      {
        title: ['', [Validators.maxLength(64)]],
        author: ['', [Validators.maxLength(64)]],
        tags: ['', [Validators.maxLength(256)]],
        publishDateFrom: [''],
        publishDateTo: [''],
        dataPerPage: ['', [Validators.min(10), Validators.max(100)]]
      });
  }

  ngOnInit() {
  }

  dropdownStateChange() {
    this.dropped = !this.dropped;
  }

  isFormValid() {
    return this.formGroup.valid;
  }

  getFormData() {
    if (this.isFormValid()) {
      const data = this.formGroup.value as SearchCriteria;
      const tagsString = this.formGroup.value.tags.toString().trim();
      data.tags = tagsString.split(',');
      data.tags.forEach(value => value.trim());
      const tags = [];
      for (const item of data.tags) {
        tags.push(item.toString().replace(/ /g, ''));
      }
      data.tags = tags;
  //    console.log(tags, 'temp');
      console.log('searchCriteria', data);
    //  return data as SearchCriteria;
      return this.httpService.getPosts(data as SearchCriteria);
    }
  }

}
