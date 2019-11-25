import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @Input()  text;

  constructor() {
    this.text = 'sample-text';
  }

  ngOnInit() {
  }

}
