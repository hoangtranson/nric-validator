import { Injectable } from '@angular/core';

import { splitNRIC, combineToDate, getGender, inBetween } from './helpers/service.helper';
import { isStateValid, getBirthPlace } from './helpers/state.helper';
import { generateRandom } from './helpers/random.helper';

export class NricService {

  NRIC: string;

  constructor(id: string) {
    this.NRIC = id;
  }

  get isValid() {
    const [input, year, month, day, birthPlace, ...rest] = splitNRIC(this.NRIC);
    const birthDate = combineToDate(year, month, day);

    if (inBetween(month, 1, 12) && inBetween(day, 1, 31)) {
      return birthDate && isStateValid(birthPlace);
    }
    return false;
  }

  get birthDate() {
    const [input, year, month, day, birthPlace, ...rest] = splitNRIC(this.NRIC);
    return `${combineToDate(year, month, day)}`;
  }

  get gender() {
    const [input, year, month, day, birthPlace, ...rest] = splitNRIC(this.NRIC);
    return getGender(rest[1]);
  }
}
