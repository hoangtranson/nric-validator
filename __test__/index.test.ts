import NRIC from "../lib";

describe('NRIC Validator Pass Cases', () => {

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

    PASSES.forEach(value => {
        test(`${value} should be valid`, () => {
            const myNRIC = new NRIC(value);
            expect(myNRIC.valid).toBe(true);
        });
    })

    test(`NRIC ${PASSES[0]} should be female`, () => {
        const myNRIC = new NRIC(PASSES[0]);
        expect(myNRIC.gender).toBe('F');
    })

    test(`NRIC ${PASSES[2]} should be male`, () => {
        const myNRIC = new NRIC(PASSES[2]);
        expect(myNRIC.gender).toBe('M');
    })

    test(`NRIC ${PASSES[0]} should return age 65`, () => {
        const myNRIC = new NRIC(PASSES[0]);
        expect(myNRIC.age).toBe(65);
    })

    test(`NRIC ${PASSES[0]} should return age 19`, () => {
        const myNRIC = new NRIC(PASSES[4]);
        expect(myNRIC.age).toBe(19);
    })
});

// describe('NRIC Validator Failed Cases', () => {

//     const FAILS = ['1ad224-10-8354', '123234', `asd@$as12dasd`];

//     FAILS.forEach(value => {
//         test(`${value} should be invalid`, () => {
//             const myNRIC = new NRIC(value);
//             expect(myNRIC.valid).toBe(true);
//         });
//     })
// });