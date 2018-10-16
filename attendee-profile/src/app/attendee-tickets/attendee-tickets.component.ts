import { Component, OnInit } from '@angular/core';

import { AttendeeTicket } from "../_models/attendee-ticket";
import { AttendeeWorkshopInfo } from "../_models/attendee-workshop-info";

@Component({
  selector: 'app-attendee-tickets',
  templateUrl: './attendee-tickets.component.html',
  styleUrls: ['./attendee-tickets.component.css']
})

export class AttendeeTicketsComponent implements OnInit {

  newTicket: AttendeeTicket;
  myTicket: AttendeeTicket;

  workshopsList1: AttendeeWorkshopInfo[];
  workshopsList2: AttendeeWorkshopInfo[];

  paymentStatus: string;

  constructor() {
    this.newTicket = new AttendeeTicket();
    this.newTicket.hasConference = false;
    this.newTicket.workshopId1 = "0";
    this.newTicket.workshopId2 = "0";

    this.myTicket = new AttendeeTicket();
    this.myTicket.hasConference = false;
    this.myTicket.workshopId1 = "1";
    this.myTicket.workshopId2 = "0";

    this.paymentStatus = "none";

    this.workshopsList1 = [];
    this.workshopsList2 = [];
  }

  ngOnInit() {
  }

  buyTicket(): void {

  }
}
