import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVenue } from './model';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class VenuesService {
   updateItem(venue: IVenue) {
      return this.http.get('assets/establishment-data.json')
   }

   private myEstablishment: IVenue;
   constructor(private http: HttpClient) { }

   getEstablishment() {
      return this.http.get('assets/establishment-data.json');
   }

   getEvents() {
      return this.http.get('assets/events-data.json');
   }

   setter(myEstablishment: any) {
      this.myEstablishment = myEstablishment;
   }
   getter() {
      return this.myEstablishment;
   }

   errorPost(error: Response) {
      return Observable.throw(error || "SERVER ERROR");
   }
}
