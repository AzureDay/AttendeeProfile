import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeScheduleComponent } from './attendee-schedule.component';

describe('AttendeeScheduleComponent', () => {
  let component: AttendeeScheduleComponent;
  let fixture: ComponentFixture<AttendeeScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendeeScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeeScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
