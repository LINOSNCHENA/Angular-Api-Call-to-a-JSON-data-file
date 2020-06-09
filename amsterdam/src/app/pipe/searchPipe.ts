import { Pipe, PipeTransform } from '@angular/core';
import { IEstablishment } from '../model';


@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {

    transform(establishementFound: IEstablishment[], name?: string, city?: string, zipcodeRange?: number) {
        console.log(zipcodeRange);
        if (!establishementFound) { return []; }
        if (!name && !city && !zipcodeRange) { return establishementFound; }
        if (name) {
            establishementFound = establishementFound.filter(establishment => establishment.location
                .name.toLocaleLowerCase().startsWith(name.toLocaleLowerCase()));
        }
        if (city) {
            establishementFound = establishementFound.filter(establishment => establishment.location
                .city.toLocaleLowerCase().startsWith(city.toLocaleLowerCase()));
        }
        //    if (zipcodeRange) {
        //        establishmentFound = establishmentFound.filter(establishment => establishment.dates.startdate >= zipcodeRange * 100);    }

        console.log(establishementFound)
        return establishementFound;
    }
}
