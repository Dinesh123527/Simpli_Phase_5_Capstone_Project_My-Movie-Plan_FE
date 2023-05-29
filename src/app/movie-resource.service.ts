import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieResourceService {

  constructor(private httpClient : HttpClient) { }

  public getAllResources() {
    const baseUrl = 'http://localhost:8080/movresources';
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-originPatterns': '*',
        'Access-Control-Allow-Headers': '*',
      }),
    };
    return this.httpClient.get(baseUrl, options);
  }
}
