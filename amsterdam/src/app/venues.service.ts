import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEstablishment } from './model';

@Injectable({
  providedIn: 'root'
})
export class VenuesService {

  private myEstablishment:IEstablishment;
   constructor(private http: HttpClient) { }

getEstablishment() {
    return this.http.get('assets/establishment-data.json');
}

getEvents() {
    return this.http.get('assets/events-data.json');
}

setter(myEstablishment: any) { 
   this.myEstablishment=myEstablishment;}
getter()                           {  
   return this.myEstablishment;  }
}
