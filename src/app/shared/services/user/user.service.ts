import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfileResponse } from '../../models/Response/UserProfileResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json'});
   }

  getUserProfile(email: string):Observable<UserProfileResponse> {
    const params = new HttpParams().set('email', email);    
    return this.httpClient.get<UserProfileResponse>("http://localhost:5000/api/user/userprofile", { headers: this.headers, params });
  }
}
