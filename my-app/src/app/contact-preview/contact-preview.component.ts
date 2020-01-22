import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ContactMessage} from "../../model/ContactMessage";
import {TestHttpServiceService} from "../test-http-service.service";
import {Post} from "../../model/Post";

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
  @Input()
  contactMessage: ContactMessage;
  @Output() reload = new EventEmitter<boolean>();

  constructor(private httpService: TestHttpServiceService) {
  }

  ngOnInit() {
  }

  close() {
    this.httpService.deleteContactMessage(this.contactMessage.id).subscribe(response => {
        this.reload.emit(true);
      }
    );
  }
}
