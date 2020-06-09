import { Pipe, PipeTransform } from '@angular/core';
import { IEstablishment } from '../model';


@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {

    transform(establishementFound: IEstablishment[], name?: string, zipcode?: string, 
        adress?: string, city?: string,) {
    
        if (!establishementFound) { return []; }
        if (!name && !city && !adress && !zipcode) { return establishementFound; }
        if (name) {
            establishementFound = establishementFound.filter(establishment => establishment.location
                .name.toLocaleLowerCase().startsWith(name.toLocaleLowerCase()));
        }
        if (zipcode) {
            establishementFound = establishementFound.filter(establishment => establishment.location
                .zipcode.toLocaleLowerCase().startsWith(name.toLocaleLowerCase()));
        }
        if (adress) {
            establishementFound = establishementFound.filter(establishment => establishment.location
                .adress.toLocaleLowerCase().startsWith(name.toLocaleLowerCase()));
        }
        if (city) {
            establishementFound = establishementFound.filter(establishment => establishment.location
                .city.toLocaleLowerCase().startsWith(city.toLocaleLowerCase()));
        }
     
        console.log(establishementFound)
        return establishementFound;
    }
}
