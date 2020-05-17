import { TestBed } from '@angular/core/testing';

import { NricService } from './nric.service';

describe('NricService', () => {
  const PASSES = ['560224608354', '560224-82-8354', '560224108355', '190617108354'];
  const FAILS = ['1ad224-10-8354', '123234', `asd@$as12dasd`];
  // const service = new NricService();

  PASSES.forEach(value => {
    it(`${value} should be valid`, () => {
      const myNRIC = new NricService(value);
      const isvalid = myNRIC.isValid;
      expect(isvalid).toEqual(true)
    })
  })

  // FAILS.forEach(value => {
  //   it(`${value} should be invalid`, () => {
  //     expect(() => {
  //       service.isNRICValid(value);
  //     }).toThrowError('Invalid value number format');
  //   })
  // })

  // it('random some IC number', () => {
  //   const newIC = service.randomNRICNumber();
  //   expect(newIC.length).toEqual(12);
  // })

  // it(`getInfo IC ${PASSES[0]} should return valid data`, () => {
  //   const actual = service.getInfo(PASSES[0]);
  //   const result = {
  //     "birthDate": "Fri Feb 24 1956 00:00:00 GMT+0730 (Singapore Standard Time)",
  //     "birthPlace": {
  //       "country": "BN",
  //       "region": "SOUTHEAST_ASIA",
  //       "state": null,
  //     },
  //     "gender": "female"
  //   }
  //   expect(actual).toEqual(result);
  // })

  // it(`getInfo IC ${PASSES[2]} should return valid data`, () => {
  //   const actual = service.getInfo(PASSES[2]);
  //   const result = {
  //     "birthDate": "Fri Feb 24 1956 00:00:00 GMT+0730 (Singapore Standard Time)",
  //     "birthPlace": {
  //       "country": "MY",
  //       "region": "SOUTHEAST_ASIA",
  //       "state": "SGR",
  //     },
  //     "gender": "male"
  //   }
  //   expect(actual).toEqual(result);
  // })
});
