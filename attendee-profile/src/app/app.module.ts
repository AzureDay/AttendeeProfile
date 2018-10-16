import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatDividerModule, MatSelectModule, MatCheckboxModule, MatGridListModule } from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AttendeeProfileComponent } from './attendee-profile/attendee-profile.component';
import { AttendeeScheduleComponent } from './attendee-schedule/attendee-schedule.component';
import { AttendeeTicketsComponent } from './attendee-tickets/attendee-tickets.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AttendeeProfileComponent,
    AttendeeScheduleComponent,
    AttendeeTicketsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatGridListModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
