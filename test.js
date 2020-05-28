const test = require('ava');
const NRIC = require('.');

const PASSES = [
  '560224608354', 
  '560224-82-8354', 
  '560224108355', 
  '190617108354', 
  '020224608354', 
  '960522135673', 
  '800101010101', 
  '960320085460', 
  '920725026083', 
  '661205135346', 
  '971204105683', 
  '771228065763'
];
const FAILS = ['1ad224-10-8354', '123234', `asd@$as12dasd`];


PASSES.forEach(value => {
    test(`${value} should be valid`, t => {
        const myNRIC = new NRIC(value);
        t.is(myNRIC.isValid, true);
    })
})

FAILS.forEach(value => {
    test(`${value} should be invalid`, async t => {
        const myNRIC = new NRIC(value);
        const error = await t.throws(() => myNRIC.isValid);
        t.is(error.message, 'Invalid value number format');
    })
})

test(`NRIC ${PASSES[0]} should return 24/02/1956`, t => {
    const myNRIC = new NRIC(PASSES[0]);
    const result = "Fri Feb 24 1956 00:00:00 GMT+0730 (Malaysia Time)";
    t.is(myNRIC.birthDate, result);
})

test(`NRIC ${PASSES[0]} should be female`, t => {
    const myNRIC = new NRIC(PASSES[0]);
    t.is(myNRIC.gender, 'F')
})


test(`NRIC ${PASSES[2]} should be male`, t => {
    const myNRIC = new NRIC(PASSES[2]);
    t.is(myNRIC.gender, 'M')
})

test(`NRIC ${PASSES[0]} should return age 64`, t => {
    const myNRIC = new NRIC(PASSES[0]);
    t.is(myNRIC.age, 64);
})

test(`NRIC ${PASSES[0]} should return age 18`, t => {
    const myNRIC = new NRIC(PASSES[4]);
    t.is(myNRIC.age, 18);
})
