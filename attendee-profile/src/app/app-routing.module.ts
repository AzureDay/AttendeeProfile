import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AttendeeProfileComponent } from "./attendee-profile/attendee-profile.component";
import { AttendeeTicketsComponent } from "./attendee-tickets/attendee-tickets.component";

const routes: Routes = [
  { path: 'profile', component: AttendeeProfileComponent },
  { path: 'tickets', component: AttendeeTicketsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
