import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeTicketsComponent } from './attendee-tickets.component';

describe('AttendeeTicketsComponent', () => {
  let component: AttendeeTicketsComponent;
  let fixture: ComponentFixture<AttendeeTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendeeTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeeTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
