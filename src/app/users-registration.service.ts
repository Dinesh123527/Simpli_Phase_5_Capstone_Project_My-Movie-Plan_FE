import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root',
})
export class UsersRegistrationService {
  constructor(private httpClient: HttpClient) {}

  public addUser(data: Users) {
    const baseUrl = 'http://localhost:8080/adduser';
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-originPatterns': '*',
        'Access-Control-Allow-Headers': '*',
      }),
    };
    return this.httpClient.post(baseUrl, data, options);
  }
}
