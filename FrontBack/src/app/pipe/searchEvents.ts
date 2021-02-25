import { Pipe, PipeTransform } from '@angular/core';
import { IVenue } from '../model';

@Pipe({
    name: 'filter2'
})

export class FilterPipe2 implements PipeTransform {

    // states =  [ {name: 'John', selected: false, value: 1}, {name: 'Bill', selected: false, value: 2},
    // {name: 'Smith', selected: false, value: 3}, {name: 'Alex', selected: false, value: 4},
    // {name: 'Martin', selected: false, value: 5}, {name: 'James', selectes: false, value: 6}];

          transform(items: any[], args: any[], city:any[]): any {
           // const venueFound = items.filter(item=>item.name=="p")
           
           let venueFound = items.filter(establishmentOrEvents => establishmentOrEvents.location
            .city)//.toLocaleLowerCase().startsWith(city.toLocaleLowerCase()));
            console.log(venueFound)
           
            if (city) {
                venueFound = items.filter(establishmentOrEvents => establishmentOrEvents.location
                    .city)//.toLocaleLowerCase().startsWith(city.toLocaleLowerCase()));
            }
            return venueFound;
        }

    }

