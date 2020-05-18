import { TestBed } from '@angular/core/testing';

import { NricService } from './nric.service';

describe('NricService', () => {
  const PASSES = ['560224608354', '560224-82-8354', '560224108355', '190617108354'];
  const FAILS = ['1ad224-10-8354', '123234', `asd@$as12dasd`];

  PASSES.forEach(value => {
    it(`${value} should be valid`, () => {
      const myNRIC = new NricService(value);
      const isvalid = myNRIC.isValid;
      expect(isvalid).toEqual(true)
    })
  })

  FAILS.forEach(value => {
    it(`${value} should be invalid`, () => {
      const myNRIC = new NricService(value);
      expect(() => {
        myNRIC.isValid;
      }).toThrowError('Invalid value number format');
    })
  })

  it(`NRIC ${PASSES[0]} should return 24/02/1956`, () => {
    const myNRIC = new NricService(PASSES[0]);
    const result = "Fri Feb 24 1956 00:00:00 GMT+0730 (Malaysia Time)";
    expect(myNRIC.birthDate).toEqual(result);
  })

  it(`NRIC ${PASSES[0]} should be female`, () => {
    const myNRIC = new NricService(PASSES[0]);
    expect(myNRIC.gender).toEqual("F");
  })


  it(`NRIC ${PASSES[2]} should be male`, () => {
    const myNRIC = new NricService(PASSES[2]);
    expect(myNRIC.gender).toEqual("M");
  })
});
