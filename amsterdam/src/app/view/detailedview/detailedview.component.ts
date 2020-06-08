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
  private iEstablishmentDetails: IEstablishment;
  constructor(private viewdataService: VenuesService, private _router:Router) { }
  ngOnInit() { this.iEstablishmentDetails=this.viewdataService.getter();  }


  completeForm(){ 
    // Test the presence/absence of a worker
        if(this.iEstablishmentDetails==undefined){
          console.log(this.viewdataService)
            this._router.navigate(['/']); }
        else
        {
    // Both update and create worker
    this.viewdataService.saveOrUpdateItem(this.iEstablishmentDetails).subscribe((worker)=>{console.log(worker);
    this._router.navigate(['/']);},(error)=>{ console.log(error); });
}
  }
 // Double
 saveOrUpdateItem2(){  
 // this.viewdataService.setter(worker);
  this._router.navigate(['/']);   }

}