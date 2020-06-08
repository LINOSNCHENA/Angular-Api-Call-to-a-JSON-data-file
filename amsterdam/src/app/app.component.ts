import { Component } from '@angular/core';
import { VenuesService } from './venues.service';
import { Router } from '@angular/router';
import { IEstablishment } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amsterdam';
  name = '';
  city = '';
  zipcode = 0;
  startdate=0;

  establishment: IEstablishment[] = [];
  events: IEstablishment[] = [];
  totalV1: number;
  totalV2: number;

  constructor(private dataService: VenuesService, private _router:Router) { }

  ngOnInit() {
  this.dataService.getEstablishment().subscribe(
    (dataSet1: any) => {
      this.establishment = dataSet1;
       console.log(this.establishment);
       this.totalV1=this.establishment.length;    }
  );
  
  this.dataService.getEvents().subscribe(
    (dataSet2: any) => {
      this.events = dataSet2;
      console.log(this.events)
      this.totalV2=this.establishment.length
    }
  );
}

viewDetails(myEstablishment: any){  
  this.dataService.setter(myEstablishment);
  this._router.navigate(['/enrolls']);  
 }

}
