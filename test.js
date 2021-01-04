const test = require('ava');
// const NRIC = require('.');
const NRIC = require('./nric');

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
        const myNRIC = NRIC(value);
        t.is(myNRIC.isValid, true);
    })
})

FAILS.forEach(value => {
    test(`${value} should be invalid`, async t => {
        const error = await t.throws(() => NRIC(value).isValid);
        t.is(error.message, 'Invalid value number format');
    })
})

test(`NRIC ${PASSES[0]} should be female`, t => {
    const myNRIC = NRIC(PASSES[0]);
    t.is(myNRIC.gender, 'F')
})


test(`NRIC ${PASSES[2]} should be male`, t => {
    const myNRIC = NRIC(PASSES[2]);
    t.is(myNRIC.gender, 'M')
})

test(`NRIC ${PASSES[0]} should return age 64`, t => {
    const myNRIC = NRIC(PASSES[0]);
    t.is(myNRIC.age, 65);
})

test(`NRIC ${PASSES[0]} should return age 18`, t => {
    const myNRIC = NRIC(PASSES[4]);
    t.is(myNRIC.age, 19);
})

// test(`NRIC ${PASSES[0]} should have right format`, t => {
//     const nric = NRIC(PASSES[0]);
//     t.is(nric.formatNRIC(), '560224-60-8354');
// })

// test(`NRIC 560224608 should have right format`, t => {
//     const nric = NRIC('560224608');
//     t.is(nric.formatNRIC(), '560224-60-8');
// })

// test(`NRIC 56022460 should have right format`, t => {
//     const nric = NRIC('56022460');
//     t.is(nric.formatNRIC(), '560224-60');
// })

// test(`NRIC 56022 should have right format`, t => {
//     const nric = NRIC('56022');
//     t.is(nric.formatNRIC(), '56022');
// })

// test(`NRIC 56022460835456 should have right format`, async t => {
//     const error = await t.throws(() => NRIC('56022460835456').formatNRIC());
//     t.is(error.message, 'Invalid value number length');
// })

// test(`NRIC 1ad224-10-8354 should have right format`, async t => {
//     const error = await t.throws(() => NRIC('1ad224-10-8354').formatNRIC());
//     t.is(error.message, 'Invalid value number format');
// })

// test(`NRIC asd@$as12dasd should have right format`, async t => {
//     const error = await t.throws(() => NRIC('asd@$as12dasd').formatNRIC());
//     t.is(error.message, 'Invalid value number format');
// })

// test(`formatBirthDate || NRIC 560224608354 should return 24/02/1956`, async t => {
//     const myNRIC = NRIC(PASSES[0]);
//     t.is(myNRIC.formatBirthDate(), '24/02/1956');
// })