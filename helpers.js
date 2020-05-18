const {
    stateCodePairs,
    countryCodePairs
} = require('./constants');

const splitNRIC = value => {
    const regex = /^(\d{2})(\d{2})(\d{2})-?(\d{2})-?(\d{3})(\d{1})$/;
    const parts = value.match(regex);

    if (!parts) {
        throw new Error('Invalid value number format');
    }

    return parts;
}


const combineToDate = (year, month, day) => {
    const today = new Date();
    const combinedDate = new Date(year, month - 1, day);

    const age = today.getFullYear() - combinedDate.getFullYear();

    if (age > 100 || (age == 100 && dateIsBefore(combinedDate, today))) {
        combinedDate.setFullYear(combinedDate.getFullYear() + 100);
    }

    return combinedDate;
}

const dateIsBefore = (before, max) => {
    const bNorm = new Date(0, before.getMonth(), before.getDate());
    const mNorm = new Date(0, max.getMonth(), max.getDate());

    return bNorm < mNorm;
}

const getGender = code => {
    return (code % 2 === 0)
        ? 'F'
        : 'M';
}

const inBetween = (value, min, max) => value >= min && value <= max;
const isStateValid = code => isMalaysia(code) || isForeign(code);

function numisBetween(num, lower, upper) {
    return (num - lower) * (num - upper) <= 0;
}

function codeToState(code) {
    return Object.keys(stateCodePairs).find(
        key => stateCodePairs[key].includes(code));
}

function isMalaysia(code) {
    return (
        numisBetween(code, 1, 16) ||
        numisBetween(code, 21, 59) ||
        code == 82
    );
}

function isForeign(code) {
    return countryCodePairs[code] != undefined;
}

function parseMalaysia(code) {
    return {
        region: REGION_SOUTHEAST_ASIA,
        country: 'MY',
        state: codeToState(code),
    };
}

function parseForeign(code) {
    return Object.assign(
        { state: null },
        countryCodePairs[code]
    );
}

function getBirthPlace(code) {
    if (isMalaysia(code)) return parseMalaysia(code);
    if (isForeign(code)) return parseForeign(code);

    return null;
}

module.exports = {
    splitNRIC,
    combineToDate,
    inBetween,
    getGender,
    isStateValid
}
