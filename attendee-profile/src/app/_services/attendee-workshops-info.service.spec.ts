import { TestBed, inject } from '@angular/core/testing';

import { AttendeeWorkshopsInfoService } from './attendee-workshops-info.service';

describe('AttendeeWorkshopsInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttendeeWorkshopsInfoService]
    });
  });

  it('should be created', inject([AttendeeWorkshopsInfoService], (service: AttendeeWorkshopsInfoService) => {
    expect(service).toBeTruthy();
  }));
});
