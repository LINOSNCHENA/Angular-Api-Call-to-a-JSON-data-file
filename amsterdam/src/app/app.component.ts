import { Component } from '@angular/core';
import { VenuesService } from './venues.service';
interface IEstablishment {
  location :{
  startdate: string;
  name: string;
  city: string;
  zipcode: string;}
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


  empData2: IEstablishment[] = [];

  constructor(private dataService: VenuesService) { }

  ngOnInit() {

  this.dataService.getEstablishment().subscribe(
    (data2: any) => {
      this.empData2 = data2;
      console.log(this.empData2.length+" - :Brno2020")
      console.log(this.empData2)
    }
  );
}
}
