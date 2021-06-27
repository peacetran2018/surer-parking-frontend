import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ParkingLotsResponse } from '../../models/Response/ParkingLotsResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  headers: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': ''});    
   }

  getParkingLots(datetime: string): Observable<ParkingLotsResponse>{
    const params = new HttpParams().set('dateTimelots', datetime);
    return this.httpClient.get<ParkingLotsResponse>("http://localhost:5000/api/parking/getparkinglots", { headers: this.headers, params });
  }
}
