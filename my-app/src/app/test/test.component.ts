import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @Input() text;
  private responsive: boolean;

  constructor() {
    this.text = 'sample-text';
  }

  ngOnInit() {
  }

  myFunction() {
    this.responsive = !this.responsive;
    const x = document.getElementById('navBar');
    if (x.className === 'top-panel') {
      x.className += ' responsive';
    } else {
      x.className = 'top-panel';
    }
  }
}
