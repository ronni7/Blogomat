import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() state: boolean;
  @Output() changed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {

  }

  ngOnInit() {
    console.log('Initial state', this.state);
  }

  toggle($event) {
    console.log($event);
    console.log(this.state);
    this.state = !this.state;
    console.log(this.state);
    this.changed.emit(this.state);
  }

}
