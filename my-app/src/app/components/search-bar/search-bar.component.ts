import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TestHttpServiceService} from '../../../service/test-http-service.service';
import {SearchCriteria} from '../../../model/SearchCriteria';
import {Post} from '../../../model/Post';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  dropped = false;
  @Input()
  authorLocked: boolean;
  @Input()
  author: string;
  @Input()
  currentPage = 1;
  @Input()
  searchTag: string;
  formGroup: FormGroup;

  @Output() postsSearchedEvent = new EventEmitter<Post[]>();

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
    if (this.authorLocked) {
      this.dropped = true;
      this.formGroup.controls.author.setValue(this.author);
    }
    if (this.searchTag) {
      this.dropped = true;
      this.formGroup.controls.tags.setValue(this.searchTag);
      this.getFormData();
    }
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
      data.page = this.currentPage;
      this.postsSearchedEvent.emit(this.httpService.getPosts(data as SearchCriteria));
    }
  }


}
