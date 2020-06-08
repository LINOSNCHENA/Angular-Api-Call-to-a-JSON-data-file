import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VenuesService {

 
  constructor(private http: HttpClient) { }

  getEstablishment() {
    return this.http.get('assets/establishment-data.json');
}

getEvents() {
    return this.http.get('assets/events-data.json');
}
}
