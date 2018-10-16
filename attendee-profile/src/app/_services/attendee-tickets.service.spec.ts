import { TestBed, inject } from '@angular/core/testing';

import { AttendeeTicketsService } from './attendee-tickets.service';

describe('AttendeeTicketsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttendeeTicketsService]
    });
  });

  it('should be created', inject([AttendeeTicketsService], (service: AttendeeTicketsService) => {
    expect(service).toBeTruthy();
  }));
});
