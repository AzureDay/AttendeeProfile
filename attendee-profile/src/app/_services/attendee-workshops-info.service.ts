import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

import { AttendeeWorkshopInfo } from "../_models/attendee-workshop-info";

@Injectable({
  providedIn: "root"
})

export class AttendeeWorkshopsInfoService {

  constructor(private http: HttpClient) {
  }

  getWorkhopsInfo(): Observable<AttendeeWorkshopInfo[]> {
    return this.http.get<AttendeeWorkshopInfo[]>("");
  }
}
