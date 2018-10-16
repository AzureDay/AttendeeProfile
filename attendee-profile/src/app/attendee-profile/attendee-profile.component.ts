import { Component, OnInit } from '@angular/core';

import { AttendeeProfile } from "../_models/attendee-profile";

@Component({
  selector: 'app-attendee-profile',
  templateUrl: './attendee-profile.component.html',
  styleUrls: ['./attendee-profile.component.css']
})

export class AttendeeProfileComponent implements OnInit {

  attendeeProfile: AttendeeProfile;

  constructor() {
    this.attendeeProfile = new AttendeeProfile();
  }

  ngOnInit() {
  }

  saveProfile(): void {

  };
}
