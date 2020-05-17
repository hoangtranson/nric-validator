import { isStateValid } from './state.helper';

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDate() {
    const today = new Date();

    const start = new Date();
    start.setFullYear(start.getFullYear() - 99);

    return new Date(
        start.getTime() + Math.random() * (today.getTime() - start.getTime())
    );
}

function twoDigitFormat(num) {
    return ('0' + num).slice(-2);
}

function dateToCode(date) {
    let code = '';

    code += date.getFullYear().toString().substr(2, 2);
    code += twoDigitFormat(date.getMonth() + 1)
    code += twoDigitFormat(date.getDate())

    return code;
}

function randomBirthplace() {
    let randomCode;

    do {
        randomCode = twoDigitFormat(randomNumberBetween(1, 99));
    } while (!isStateValid(randomCode));

    return randomCode;
}

function randomSpecialNumber() {
    let code = '';
    for (let i = 0; i < 4; i += 1) {
        code += randomNumberBetween(0, 9);
    }

    return code;
}

export function generateRandom() {
    return dateToCode(randomDate()) +
        randomBirthplace() +
        randomSpecialNumber();
}
