import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VenuesService } from 'src/app/venues.service';
import { IEstablishment } from 'src/app/model';

@Component({
  selector: 'app-detailedview',
  templateUrl: './detailedview.component.html',
  styleUrls: ['./detailedview.component.css']
})
export class DetailedviewComponent implements OnInit {
  title = 'amsterdam';
  name = '';
  city = '';
  zipcode = 0;
  startdate=0;
 
  iEstablishmentDetails: IEstablishment;  // SINGLE
  establishment: IEstablishment[] = [];   // Multiple
  
  iEvents: IEstablishment;                // Single
  events: IEstablishment[] = [];          // Multiple

  totalEstablishment: number;
  totalEvents: number;


  //------------------------------------------
  constructor(private viewdataService: VenuesService, private _router:Router) { }
  ngOnInit() 
  { this.iEstablishmentDetails=this.viewdataService.getter(); 
    this.viewdataService.getEstablishment().subscribe(
      (dataSet1: any) => {
        this.establishment = dataSet1;
        this.totalEstablishment=this.establishment.length;   
      console.log(this.iEstablishmentDetails);
      console.log(this.establishment);
    
    }
    );
      console.log(this.iEstablishmentDetails);

 }


  completeForm(){ 
    // Test the presence/absence of a record
        if(this.iEstablishmentDetails==undefined)
        {
          this._router.navigate(['/']); }
        else
        {
    // Both update 
    this.viewdataService.saveOrUpdateItem(this.iEstablishmentDetails)
    .subscribe((iEstablishmentDetails)=>{console.log(iEstablishmentDetails);
    this._router.navigate(['/']);},(error)=>{ console.log(error); });
}
  }

 viewAllVenues()
 {  
  this._router.navigate(['/']);   }

}