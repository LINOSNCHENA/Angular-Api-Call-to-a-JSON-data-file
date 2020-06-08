import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEstablishment } from './model';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class VenuesService {
  saveOrUpdateItem(worker: IEstablishment) {
    return this.http.get('assets/establishment-data.json')
    //.map((response:Response)=>response.json())
   // .catch(this.errorPost);
  }

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

errorPost(error:Response) {  
   return Observable.throw(error||"SERVER ERROR");  }
}
