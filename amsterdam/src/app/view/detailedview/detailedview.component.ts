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

  establishment: IEstablishment[] = [];
  events: IEstablishment[] = [];
  totalEstablishment: number;
  totalEvents: number;
/// ===========================================

  public iEstablishmentDetails: IEstablishment;
  constructor(private viewdataService: VenuesService, private _router:Router) { }
  ngOnInit() 
  { this.iEstablishmentDetails=this.viewdataService.getter(); 
  console.log(this.iEstablishmentDetails); }


  completeForm(){ 
    // Test the presence/absence 
        if(this.iEstablishmentDetails==undefined){
          console.log(this.viewdataService)
            this._router.navigate(['/']); }
        else
        {
    // Both update 
    this.viewdataService.saveOrUpdateItem(this.iEstablishmentDetails)
    .subscribe((iEstablishmentDetails)=>{console.log(iEstablishmentDetails);
    this._router.navigate(['/']);},(error)=>{ console.log(error); });

    // Both update and create worker
   // this._userService.saveOrUpdateItem(this.worker).subscribe((worker)=>{console.log(worker);
   //   this._rotuer.navigate(['/']);},(error)=>{ console.log(error); });
}
  }
 // Double
 // viewDetails(established)
 viewAllVenues(){  
 // this.viewdataService.setter(worker);
  this._router.navigate(['/']);   }

}