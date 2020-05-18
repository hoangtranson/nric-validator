const { splitNRIC, combineToDate, inBetween, getGender, isStateValid } = require('./helpers');

class NRIC {
    constructor(id) {
        this.id = id;
    }

    get isValid() {
        const [input, year, month, day, birthPlace, ...rest] = splitNRIC(this.id);
        const birthDate = combineToDate(year, month, day);

        if (inBetween(month, 1, 12) && inBetween(day, 1, 31)) {
            return birthDate && isStateValid(birthPlace);
        }
        return false;
    }

    get birthDate() {
        const [input, year, month, day, birthPlace, ...rest] = splitNRIC(this.id);
        return `${combineToDate(year, month, day)}`;
    }

    get gender() {
        const [input, year, month, day, birthPlace, ...rest] = splitNRIC(this.id);
        return getGender(rest[1]);
    }
}

module.exports = NRIC;