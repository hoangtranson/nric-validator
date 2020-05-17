import { Injectable } from '@angular/core';

import { splitNRIC, combineToDate, getGender, inBetween } from './helpers/service.helper';
import { isStateValid, getBirthPlace } from './helpers/state.helper';
import { generateRandom } from './helpers/random.helper';
import { INric } from './i-nric';

@Injectable({
  providedIn: 'root'
})
export class NricService implements INric {

  isNRICValid(value: string): boolean {
    const [ input, year , month , day ,birthPlace, ...rest] = splitNRIC(value);
    const birthDate = combineToDate(year, month, day);

    if(inBetween(month, 1, 12) && inBetween(day, 1, 31))
      return birthDate && isStateValid(birthPlace);
    return false;
  }
  
  randomNRICNumber(): string {
    return generateRandom();
  }

  formatNumber(value: string): string {
    const [ input, year , month , day ,birthPlace, ...rest] = splitNRIC(value);
    return `${year}${month}${day}-${birthPlace}-${rest[0]}${rest[1]}`;
  }

  unFormatNumber(value: string): string {
    return this.formatNumber(value).replace(/-/g, '');
  }

  getInfo(value: string): object {
    const [ input, year , month , day ,birthPlace, ...rest] = splitNRIC(value);

    return {
      birthDate: `${combineToDate( year , month , day)}`,
      birthPlace: getBirthPlace(birthPlace),
      gender: getGender(rest[1])
    }
  }

  autoPopulateGenderBasedOnNRIC(value: string) {
    let lastIcNo = Number(value[11]);
    
    if(lastIcNo%2 !== 0 )
      return 'M';
    else
      return 'F';
  }
}
