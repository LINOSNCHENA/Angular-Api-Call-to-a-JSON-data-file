import { Component } from '@angular/core';
import { VenuesService } from './venues.service';
import { Router } from '@angular/router';
import { IVenue } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OutOfAmsterdam';

}
