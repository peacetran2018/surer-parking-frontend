import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthenticateResponse } from '../../models/Response/AuthenticateResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders();
   }

  login(requestBody: any): Observable<AuthenticateResponse>{
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization' : btoa(requestBody.useremail + ":" + requestBody.password)});
    console.log(this.headers);
    return this.httpClient.post<AuthenticateResponse>("http://localhost:5000/api/authenticate/login", [] ,{ headers: this.headers});
  }

  register(requestBody: any): Observable<AuthenticateResponse>{
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization' : btoa(requestBody.email + ":" + requestBody.password + ":" + requestBody.firstname + ":" + requestBody.lastname + ":" + requestBody.phonenumber)});
    return this.httpClient.post<AuthenticateResponse>("http://localhost:5000/api/authenticate/register", [] ,{ headers: this.headers})
  }
}
