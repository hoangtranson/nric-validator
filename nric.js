function NRIC(_id) {
  this.id = _id;

  const REGION_SOUTHEAST_ASIA = "SOUTHEAST_ASIA";
  const REGION_BRITISH_ISLES = "BRITISH_ISLES";
  const REGION_SOVIET_REPUBLIC = "SOVIET_REPUBLIC";
  const REGION_EAST_ASIA = "EAST_ASIA";
  const REGION_SOUTH_ASIA = "SOUTH_ASIA";
  const REGION_AFRICA = "AFRICA";
  const REGION_SOUTH_AMERICA = "SOUTH_AMERICA";
  const REGION_CENTRAL_AMERICA = "CENTRAL_AMERICA";
  const REGION_NORTH_AMERICA = "NORTH_AMERICA";
  const REGION_OCEANIA = "OCEANIA";
  const REGION_MIDDLE_EAST = "MIDDLE_EAST";
  const REGION_EUROPE = "EUROPE";
  const REGION_MIDDLE_AMERICA = "MIDDLE_AMERICA";
  const REGION_MISCELLANEOUS = "MISCELLANEOUS";

  const stateCodePairs = {
    JHR: ["01", "21", "22", "24"],
    KDH: ["02", "25", "26", "27"],
    KTN: ["03", "28", "29"],
    MLK: ["04", "30"],
    NSN: ["05", "31", "59"],
    PHG: ["06", "32", "33"],
    PNG: ["07", "34", "35"],
    PRK: ["08", "36", "37", "38"],
    PLS: ["09", "40"],
    SGR: ["10", "41", "42", "43", "44"],
    TRG: ["11", "45", "46"],
    SBH: ["12", "47", "48", "49"],
    SWK: ["13", "50", "51", "52", "53"],
    KUL: ["14", "54", "55", "56", "57"],
    LBN: ["15", "58"],
    PJY: ["16"],
    UNKNOWN_STATE: ["82"],
  };

  const countryCodePairs = {
    60: { country: "BN", region: REGION_SOUTHEAST_ASIA },
    61: { country: "ID", region: REGION_SOUTHEAST_ASIA },
    62: { country: "KH", region: REGION_SOUTHEAST_ASIA },
    63: { country: "LA", region: REGION_SOUTHEAST_ASIA },
    64: { country: "MM", region: REGION_SOUTHEAST_ASIA },
    65: { country: "PH", region: REGION_SOUTHEAST_ASIA },
    66: { country: "SG", region: REGION_SOUTHEAST_ASIA },
    67: { country: "TH", region: REGION_SOUTHEAST_ASIA },
    68: { country: "VN", region: REGION_SOUTHEAST_ASIA },

    71: { country: "FOREIGN_UNKNOWN", region: null },
    72: { country: "FOREIGN_UNKNOWN", region: null },

    74: { country: "CN", region: REGION_EAST_ASIA },
    75: { country: "IN", region: REGION_SOUTH_ASIA },
    76: { country: "PK", region: REGION_SOUTH_ASIA },
    77: { country: "SA", region: REGION_MIDDLE_EAST },
    78: { country: "LK", region: REGION_SOUTH_ASIA },
    79: { country: "BD", region: REGION_SOUTH_ASIA },

    83: {
      country: "AS|AU|CX|CC|CK|FJ|PF|GU|HM|MH|FM|NC|NZ|NU|NF|PG|TL|TK|UM|WF",
      region: REGION_OCEANIA,
    },
    84: {
      country: "AI|AR|AW|BO|BR|CL|CO|EC|GF|GP|GY|PY|PE|GS|ST|UY|VE",
      region: REGION_SOUTH_AMERICA,
    },
    85: {
      country:
        "DZ|AO|BW|BI|CM|CF|CG|CD|DG|EG|ER|ET|GA|GM|GN|KE|LR|MW|ML|MR|YT|" +
        "MA|MZ|NA|NE|NG|RW|RE|SN|SL|SO|SD|SZ|TZ|TG|TO|TN|UG|ME|ZR|ZM|ZW",
      region: REGION_AFRICA,
    },
    86: {
      country:
        "AM|AT|BE|CY|DK|FO|FR|FI|DE|DD|GR|VA|IT|LU|" +
        "MK|MT|MC|NL|NO|PT|MD|SK|SI|ES|SE|CH|GG|JE|IM",
      region: REGION_EUROPE,
    },
    87: {
      country: "GB|IE",
      region: REGION_BRITISH_ISLES,
    },
    88: {
      country: "BH|IR|IQ|PS|JO|KW|OM|QA|YE|SY|TR|YE|YD|",
      region: REGION_MIDDLE_EAST,
    },
    89: {
      country: "JP|KP|KR|TW",
      region: REGION_EAST_ASIA,
    },
    90: {
      country:
        "BS|BB|BZ|CR|CU|DM|DO|SV|GD|GT|HT|HN|" +
        "JM|MQ|MX|NI|PA|PR|KN|LC|VC|TT|TC|VI",
      region: REGION_MIDDLE_AMERICA,
    },
    91: {
      country: "CA|GL|AN|PM|US",
      region: REGION_NORTH_AMERICA,
    },
    92: {
      country: "AL|BY|BA|BG|HR|CZ|CS|EE|GE|HU|LV|LT|ME|PL|XK|RO|RU|RS|UA",
      region: REGION_SOVIET_REPUBLIC,
    },
    93: {
      country:
        "AF|AD|AQ|AG|AZ|BJ|BM|BT|IO|BF|CV|KY|KM|DY|GQ|TF|GI|GW|HK|" +
        "IS|CI|KZ|KI|KG|LS|LY|LI|MO|MG|MV|MU|MN|MS|NR|NP|MP|PW|PS|" +
        "PN|SH|LC|VC|WS|SM|ST|SC|SB|SJ|TJ|TM|TV|HV|UZ|VU|VA|VG|YU",
      region: REGION_MISCELLANEOUS,
    },

    98: { country: "STATELESS", region: null },
    99: { country: "UNSPECIFIED", region: null },
  };

  const dateIsBefore = (before, max) => {
    const bNorm = new Date(0, before.getMonth(), before.getDate());
    const mNorm = new Date(0, max.getMonth(), max.getDate());

    return bNorm < mNorm;
  };

  const getGender = (code) => {
    return code % 2 === 0 ? "F" : "M";
  };

  const inBetween = (value, min, max) => value >= min && value <= max;
  const isStateValid = (code) => isMalaysia(code) || isForeign(code);

  function numisBetween(num, lower, upper) {
    return (num - lower) * (num - upper) <= 0;
  }

  function isMalaysia(code) {
    return (
      numisBetween(code, 1, 16) || numisBetween(code, 21, 59) || code == 82
    );
  }

  function isForeign(code) {
    return countryCodePairs[code] != undefined;
  }

  function isNumeric(value) {
    return /^\d+$/.test(value);
  }

  const splitNRIC = (value) => {
    const regex = /^(\d{2})(\d{2})(\d{2})-?(\d{2})-?(\d{3})(\d{1})$/;
    const parts = value.match(regex);

    if (!parts) {
      throw new Error("Invalid value number format");
    }

    return parts;
  };

  const combineToDate = (year, month, day) => {
    const today = new Date();
    const combinedDate = new Date(year, month, day);

    const age = today.getFullYear() - combinedDate.getFullYear();

    if (age > 100 || (age == 100 && dateIsBefore(combinedDate, today))) {
      combinedDate.setFullYear(combinedDate.getFullYear() + 100);
    }

    return combinedDate;
  };

  const isValid = () => {
    const [input, year, month, day, birthPlace, ...rest] = splitNRIC(this.id);
    const birthDate = combineToDate(year, month, day);

    if (inBetween(month, 1, 12) && inBetween(day, 1, 31)) {
      return birthDate && isStateValid(birthPlace);
    }
    return false;
  };

  const birthDate = () => {
    const [input, year, month, day, birthPlace, ...rest] = splitNRIC(this.id);
    return `${combineToDate(year, month, day)}`;
  };

  const gender = () => {
    const [input, year, month, day, birthPlace, ...rest] = splitNRIC(this.id);
    return getGender(rest[1]);
  };

  const age = () => {
    const [input, year, month, day, birthPlace, ...rest] = splitNRIC(this.id);
    const today = new Date();
    const combinedDate = new Date(year, month - 1, day);
    const age = today.getFullYear() - combinedDate.getFullYear();
    return age >= 100 ? age - 100 : age;
  };

  // const formatBirthDate = function(_format = "DD/MM/YYYY") {
  //     const [input, year, month, day, birthPlace, ...rest] = splitNRIC(this.id);
  //     const birthDate = combineToDate(year, month, day);
  //     const _day = birthDate.getDate();
  //     const _month = birthDate.getMonth();
  //     const _year = birthDate.getFullYear();
  //     return _format.replace('DD', _day).replace('MM', _month).replace('YYYY', _year);
  // }

  // const formatNRIC = function(_delimiter = "-") {
  //     let _value = `${this.id}`;

  //     if(!isNumeric(_value)) {
  //         throw new Error('Invalid value number format');
  //     }

  //     if(_value.length > 12) {
  //         throw new Error('Invalid value number length');
  //     }

  //     const first = _value.substring(0,6);
  //     const second = _value.substring(6,8);
  //     const third = _value.substring(8, 12);

  //     if(third) {
  //         return first + _delimiter + second + _delimiter + third;
  //     }

  //     if(second){
  //         return first + _delimiter + second
  //     }

  //     return first;
  // }

  return {
    isValid: isValid(),
    birthDate: birthDate(),
    gender: gender(),
    age: age(),
  };
}

// window.NRIC = NRIC;
// export default NRIC;
module.exports = NRIC;
