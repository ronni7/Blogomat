import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss']
})
export class ModalInfoComponent implements OnInit {

  @Input()
  message: string = '';
  @Output() closeEvent = new EventEmitter<any>();


  constructor() {
  }

  ngOnInit() {
  }


  close() {
    this.closeEvent.emit();
  }
}
