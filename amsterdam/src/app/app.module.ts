import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VenuesService } from './venues.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailedviewComponent } from './view/detailedview/detailedview.component';
import { Routes, RouterModule } from '@angular/router';
import { AvailableviewsComponent } from './venues/availableviews/availableviews.component';
import { FilterPipe } from './pipe/searchPipe';

const appRoutes :Routes = [
  {path : 'enrolls',component: DetailedviewComponent },
  {path : '',component: AvailableviewsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DetailedviewComponent,
    AvailableviewsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    RouterModule.forRoot(appRoutes), FormsModule
  ],
  providers: [VenuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
