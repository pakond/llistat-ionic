import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Race } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class LlistatServiceService {

  constructor(private http: HttpClient) { }

  fetchRaces() {

    const url: string = environment.apiUrl + '/race/';
    const headers = new HttpHeaders().set('X-Api-Key', environment.apiKey)

    return this.http.get<Race[]>(url, { headers });

  }
}
