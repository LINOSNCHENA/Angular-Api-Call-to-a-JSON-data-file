import { Component } from '@angular/core';
import { VenuesService } from './venues.service';

interface IEstablishment {
  location :
  {
  startdate: string;
  name: string;
  city: string;
  zipcode: string;
}
}

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

  constructor(private dataService: VenuesService) { }

  ngOnInit() {

  this.dataService.getEstablishment().subscribe(
    (dataSet1: any) => {
      this.establishment = dataSet1;
       console.log(this.establishment)
    }
  );
  
  this.dataService.getEvents().subscribe(
    (dataSet2: any) => {
      this.events = dataSet2;
      console.log(this.events)
    }
  );

}
}
