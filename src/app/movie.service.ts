import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  public addMovie(data: Movie) {
    const baseUrl = 'http://localhost:8080/addmovie';
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-originPatterns': '*',
        'Access-Control-Allow-Headers': '*',
      }),
    };
    return this.httpClient.post(baseUrl, data, options);
  }

  public getMovieById(mid: number) {
    const baseUrl = 'http://localhost:8080/movies';
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-originPatterns': '*',
        'Access-Control-Allow-Headers': '*',
      }),
    };
    return this.httpClient.get(baseUrl + '/' + mid, options);
  }

  public updateMovie(mid: number, data: Movie) {
    const baseUrl = 'http://localhost:8080/updatemovie';
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-originPatterns': '*',
        'Access-Control-Allow-Headers': '*',
      }),
    };
    return this.httpClient.put(baseUrl + '/' + mid, data, options);
  }

  public deleteMovieById(mid: number) {
    const baseUrl = 'http://localhost:8080/deletemovie';
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-originPatterns': '*',
        'Access-Control-Allow-Headers': '*',
      }),
    };
    return this.httpClient.delete(baseUrl + '/' + mid, options);
  }

  public getAllMovies() {
    const baseUrl = 'http://localhost:8080/getallmovies';
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
