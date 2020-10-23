import { Pipe, PipeTransform } from '@angular/core';
import { IVenue } from '../model';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
  //  venueFound: any;
   // e: any;

    transform(venueFound: IVenue[], name?: string, zipcode?: string,
        adress?: string, city?: string) {
        if (!venueFound) { return []; }
        if (!name && !city && !adress && !zipcode) { return venueFound; }
        if (name) {
            venueFound = venueFound.filter(establishmentOrEvents => establishmentOrEvents.location
                .name.toLocaleLowerCase().startsWith(name.toLocaleLowerCase()));

        }
        if (zipcode) {
            venueFound = venueFound.filter(establishment => establishment.location
                .zipcode.toLocaleLowerCase().startsWith(zipcode.toLocaleLowerCase()));
        }
        if (adress) {
            venueFound = venueFound.filter(establishmentOrEvents => establishmentOrEvents.location
                .adress.toLocaleLowerCase().startsWith(adress.toLocaleLowerCase()));

        }
        if (city) {
            venueFound = venueFound.filter(establishmentOrEvents => establishmentOrEvents.location
                .city.toLocaleLowerCase().startsWith(city.toLocaleLowerCase()));
        }

        return venueFound;
    }

}
