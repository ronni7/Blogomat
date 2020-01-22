import {Component, OnInit} from '@angular/core';
import {ContactMessage} from '../../../model/ContactMessage';
import {TestHttpServiceService} from '../../test-http-service.service';

@Component({
  selector: 'app-contact-message-list',
  templateUrl: './contact-message-list.component.html',
  styleUrls: ['./contact-message-list.component.scss']
})
export class ContactMessageListComponent implements OnInit {
  contactList: ContactMessage[];
  actionPerformed: boolean = false;

  constructor(private httpService: TestHttpServiceService) {

  }

  ngOnInit() {
    this.loadContactMessages();
  }

  private loadContactMessages() {
    this.httpService.getContactMessages().subscribe(response => {
        if (response) {
          this.contactList = response as ContactMessage[];
        }
      }
    );
  }

  handleEvent($event: any) {
    if ($event instanceof MouseEvent) {
      $event.stopPropagation();
    }
    this.actionPerformed = !this.actionPerformed;
  }

  reloadMessages() {
    this.loadContactMessages();
  }
}
