import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMessageListComponent } from './contact-message-list.component';

describe('ContactMessageListComponent', () => {
  let component: ContactMessageListComponent;
  let fixture: ComponentFixture<ContactMessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMessageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
