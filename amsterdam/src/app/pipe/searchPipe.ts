import { Pipe, PipeTransform } from '@angular/core';
import { IEstablishment } from '../model';


@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {

    transform(emp2: IEstablishment[], name?: string, city?: string, zipcodeRange?: number) {
        console.log(zipcodeRange);
        if (!emp2) { return []; }
        if (!name && !city && !zipcodeRange) { return emp2; }
        if (name) {
            emp2 = emp2.filter(establishment => establishment.location
                .name.toLocaleLowerCase().startsWith(name.toLocaleLowerCase()));
        }
        if (city) {
            emp2 = emp2.filter(establishment => establishment.location
                .city.toLocaleLowerCase().startsWith(city.toLocaleLowerCase()));
        }
     //   if (zipcodeRange) {
      //      emp2 = emp2.filter(establishment => establishment.dates.startdate >= zipcodeRange * 100);    }

console.log(emp2)
        return emp2;
    }
}
