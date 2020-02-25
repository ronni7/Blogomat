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
  }

  toggle($event) {
    this.state = !this.state;
    this.changed.emit(this.state);
  }

}
