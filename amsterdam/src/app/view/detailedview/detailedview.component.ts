import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VenuesService } from 'src/app/venues.service';
import { IVenue } from 'src/app/model';

@Component({
  selector: 'app-detailedview',
  templateUrl: './detailedview.component.html',
  styleUrls: ['./detailedview.component.css']
})
export class DetailedviewComponent implements OnInit {

  title = 'OutOfAmsterdam';
  name = '';
  city = '';
  zipcode = "";
  adress = "";
  urls = '';
  media = '';

  iEstablishmentDetails: IVenue;  // SINGLE
  establishment: IVenue[] = [];   // Multiple

  iEvents: IVenue;                // Single
  events: IVenue[] = [];          // Multiple

  totalEstablishment: number;
  totalEvents: number;

  constructor(private viewdataService: VenuesService, private _router: Router) { }
 
  ngOnInit() {
    this.iEstablishmentDetails = this.viewdataService.getter();
    this.viewdataService.getEstablishment().subscribe(
      (dataSet1: any) => {
        this.establishment = dataSet1;
        this.totalEstablishment = this.establishment.length;
        console.log(this.iEstablishmentDetails);
        console.log(this.establishment);
      }
    );
  }


  completeForm() {
    if (this.iEstablishmentDetails == undefined) {
      this._router.navigate(['/']);
    }
    else {
      this.viewdataService.updateItem(this.iEstablishmentDetails)
        .subscribe((iEstablishmentDetails) => {
          console.log(iEstablishmentDetails);
          this._router.navigate(['/']);
        }, (error) => { console.log(error); });
    }
  }

  viewAllVenues() {
     this._router.navigate(['/']);
  }
}