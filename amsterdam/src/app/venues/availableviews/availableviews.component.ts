import { Component, OnInit } from '@angular/core';
import { IVenue } from 'src/app/model';
import { VenuesService } from 'src/app/venues.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-availableviews',
  templateUrl: './availableviews.component.html',
  styleUrls: ['./availableviews.component.css']
})
export class AvailableviewsComponent implements OnInit {

  title = 'OutOfAmsterdam';
  name = '';
  city = '';
  zipcode = "";
  adress = "";
  urls = '';
  media = '';

  establishment: IVenue[] = [];
  events: IVenue[] = [];

  totalEstablishment: number;
  totalEvents: number;

  constructor(private dataService: VenuesService, private _router: Router) { }

  ngOnInit() {

    this.dataService.getEstablishment().subscribe(
      (dataSet1: any) => {
        this.establishment = dataSet1;
        console.log(this.establishment);
        console.log(this.establishment);
        this.totalEstablishment = this.establishment.length;
         }
    );

    this.dataService.getEvents().subscribe(
      (dataSet2: any) => {
        this.events = dataSet2;
        console.log(this.events)
        this.totalEvents = this.events.length
      }
    );
  }

  viewDetails(iEstablishment: any) {
    this.dataService.setter(iEstablishment);
    this._router.navigate(['/enrolls']);
  }
  e = []; o = []; selectedPeople = [{ name: 'Karyn Wright' }];
  clearModel() { this.dataService.getEstablishment; }
  changeModel() { this.selectedPeople = [{ name: 'New person' }]; }
}
