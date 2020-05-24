"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var REGION_SOUTHEAST_ASIA = 'SOUTHEAST_ASIA';
var REGION_BRITISH_ISLES = 'BRITISH_ISLES';
var REGION_SOVIET_REPUBLIC = 'SOVIET_REPUBLIC';
var REGION_EAST_ASIA = 'EAST_ASIA';
var REGION_SOUTH_ASIA = 'SOUTH_ASIA';
var REGION_AFRICA = 'AFRICA';
var REGION_SOUTH_AMERICA = 'SOUTH_AMERICA';
var REGION_CENTRAL_AMERICA = 'CENTRAL_AMERICA';
var REGION_NORTH_AMERICA = 'NORTH_AMERICA';
var REGION_OCEANIA = 'OCEANIA';
var REGION_MIDDLE_EAST = 'MIDDLE_EAST';
var REGION_EUROPE = 'EUROPE';
var REGION_MIDDLE_AMERICA = 'MIDDLE_AMERICA';
var REGION_MISCELLANEOUS = 'MISCELLANEOUS';
var stateCodePairs = {
  'JHR': ['01', '21', '22', '24'],
  'KDH': ['02', '25', '26', '27'],
  'KTN': ['03', '28', '29'],
  'MLK': ['04', '30'],
  'NSN': ['05', '31', '59'],
  'PHG': ['06', '32', '33'],
  'PNG': ['07', '34', '35'],
  'PRK': ['08', '36', '37', '38'],
  'PLS': ['09', '40'],
  'SGR': ['10', '41', '42', '43', '44'],
  'TRG': ['11', '45', '46'],
  'SBH': ['12', '47', '48', '49'],
  'SWK': ['13', '50', '51', '52', '53'],
  'KUL': ['14', '54', '55', '56', '57'],
  'LBN': ['15', '58'],
  'PJY': ['16'],
  'UNKNOWN_STATE': ['82']
};
var countryCodePairs = {
  '60': {
    country: 'BN',
    region: REGION_SOUTHEAST_ASIA
  },
  '61': {
    country: 'ID',
    region: REGION_SOUTHEAST_ASIA
  },
  '62': {
    country: 'KH',
    region: REGION_SOUTHEAST_ASIA
  },
  '63': {
    country: 'LA',
    region: REGION_SOUTHEAST_ASIA
  },
  '64': {
    country: 'MM',
    region: REGION_SOUTHEAST_ASIA
  },
  '65': {
    country: 'PH',
    region: REGION_SOUTHEAST_ASIA
  },
  '66': {
    country: 'SG',
    region: REGION_SOUTHEAST_ASIA
  },
  '67': {
    country: 'TH',
    region: REGION_SOUTHEAST_ASIA
  },
  '68': {
    country: 'VN',
    region: REGION_SOUTHEAST_ASIA
  },
  '71': {
    country: 'FOREIGN_UNKNOWN',
    region: null
  },
  '72': {
    country: 'FOREIGN_UNKNOWN',
    region: null
  },
  '74': {
    country: 'CN',
    region: REGION_EAST_ASIA
  },
  '75': {
    country: 'IN',
    region: REGION_SOUTH_ASIA
  },
  '76': {
    country: 'PK',
    region: REGION_SOUTH_ASIA
  },
  '77': {
    country: 'SA',
    region: REGION_MIDDLE_EAST
  },
  '78': {
    country: 'LK',
    region: REGION_SOUTH_ASIA
  },
  '79': {
    country: 'BD',
    region: REGION_SOUTH_ASIA
  },
  '83': {
    country: 'AS|AU|CX|CC|CK|FJ|PF|GU|HM|MH|FM|NC|NZ|NU|NF|PG|TL|TK|UM|WF',
    region: REGION_OCEANIA
  },
  '84': {
    country: 'AI|AR|AW|BO|BR|CL|CO|EC|GF|GP|GY|PY|PE|GS|ST|UY|VE',
    region: REGION_SOUTH_AMERICA
  },
  '85': {
    country: 'DZ|AO|BW|BI|CM|CF|CG|CD|DG|EG|ER|ET|GA|GM|GN|KE|LR|MW|ML|MR|YT|' + 'MA|MZ|NA|NE|NG|RW|RE|SN|SL|SO|SD|SZ|TZ|TG|TO|TN|UG|ME|ZR|ZM|ZW',
    region: REGION_AFRICA
  },
  '86': {
    country: 'AM|AT|BE|CY|DK|FO|FR|FI|DE|DD|GR|VA|IT|LU|' + 'MK|MT|MC|NL|NO|PT|MD|SK|SI|ES|SE|CH|GG|JE|IM',
    region: REGION_EUROPE
  },
  '87': {
    country: 'GB|IE',
    region: REGION_BRITISH_ISLES
  },
  '88': {
    country: 'BH|IR|IQ|PS|JO|KW|OM|QA|YE|SY|TR|YE|YD|',
    region: REGION_MIDDLE_EAST
  },
  '89': {
    country: 'JP|KP|KR|TW',
    region: REGION_EAST_ASIA
  },
  '90': {
    country: 'BS|BB|BZ|CR|CU|DM|DO|SV|GD|GT|HT|HN|' + 'JM|MQ|MX|NI|PA|PR|KN|LC|VC|TT|TC|VI',
    region: REGION_MIDDLE_AMERICA
  },
  '91': {
    country: 'CA|GL|AN|PM|US',
    region: REGION_NORTH_AMERICA
  },
  '92': {
    country: 'AL|BY|BA|BG|HR|CZ|CS|EE|GE|HU|LV|LT|ME|PL|XK|RO|RU|RS|UA',
    region: REGION_SOVIET_REPUBLIC
  },
  '93': {
    country: 'AF|AD|AQ|AG|AZ|BJ|BM|BT|IO|BF|CV|KY|KM|DY|GQ|TF|GI|GW|HK|' + 'IS|CI|KZ|KI|KG|LS|LY|LI|MO|MG|MV|MU|MN|MS|NR|NP|MP|PW|PS|' + 'PN|SH|LC|VC|WS|SM|ST|SC|SB|SJ|TJ|TM|TV|HV|UZ|VU|VA|VG|YU',
    region: REGION_MISCELLANEOUS
  },
  '98': {
    country: 'STATELESS',
    region: null
  },
  '99': {
    country: 'UNSPECIFIED',
    region: null
  }
};

var splitNRIC = function splitNRIC(value) {
  var regex = /^(\d{2})(\d{2})(\d{2})-?(\d{2})-?(\d{3})(\d{1})$/;
  var parts = value.match(regex);

  if (!parts) {
    throw new Error('Invalid value number format');
  }

  return parts;
};

var combineToDate = function combineToDate(year, month, day) {
  var today = new Date();
  var combinedDate = new Date(year, month - 1, day);
  var age = today.getFullYear() - combinedDate.getFullYear();

  if (age > 100 || age == 100 && dateIsBefore(combinedDate, today)) {
    combinedDate.setFullYear(combinedDate.getFullYear() + 100);
  }

  return combinedDate;
};

var dateIsBefore = function dateIsBefore(before, max) {
  var bNorm = new Date(0, before.getMonth(), before.getDate());
  var mNorm = new Date(0, max.getMonth(), max.getDate());
  return bNorm < mNorm;
};

var getGender = function getGender(code) {
  return code % 2 === 0 ? 'F' : 'M';
};

var inBetween = function inBetween(value, min, max) {
  return value >= min && value <= max;
};

var isStateValid = function isStateValid(code) {
  return isMalaysia(code) || isForeign(code);
};

function numisBetween(num, lower, upper) {
  return (num - lower) * (num - upper) <= 0;
}

function codeToState(code) {
  return Object.keys(stateCodePairs).find(function (key) {
    return stateCodePairs[key].includes(code);
  });
}

function isMalaysia(code) {
  return numisBetween(code, 1, 16) || numisBetween(code, 21, 59) || code == 82;
}

function isForeign(code) {
  return countryCodePairs[code] != undefined;
}

function parseMalaysia(code) {
  return {
    region: REGION_SOUTHEAST_ASIA,
    country: 'MY',
    state: codeToState(code)
  };
}

function parseForeign(code) {
  return Object.assign({
    state: null
  }, countryCodePairs[code]);
}

function getBirthPlace(code) {
  if (isMalaysia(code)) return parseMalaysia(code);
  if (isForeign(code)) return parseForeign(code);
  return null;
}

var NRIC = /*#__PURE__*/function () {
  function NRIC(id) {
    _classCallCheck(this, NRIC);

    this.id = id;
  }

  _createClass(NRIC, [{
    key: "isValid",
    get: function get() {
      var _splitNRIC = splitNRIC(this.id),
          _splitNRIC2 = _toArray(_splitNRIC),
          input = _splitNRIC2[0],
          year = _splitNRIC2[1],
          month = _splitNRIC2[2],
          day = _splitNRIC2[3],
          birthPlace = _splitNRIC2[4],
          rest = _splitNRIC2.slice(5);

      var birthDate = combineToDate(year, month, day);

      if (inBetween(month, 1, 12) && inBetween(day, 1, 31)) {
        return birthDate && isStateValid(birthPlace);
      }

      return false;
    }
  }, {
    key: "birthDate",
    get: function get() {
      var _splitNRIC3 = splitNRIC(this.id),
          _splitNRIC4 = _toArray(_splitNRIC3),
          input = _splitNRIC4[0],
          year = _splitNRIC4[1],
          month = _splitNRIC4[2],
          day = _splitNRIC4[3],
          birthPlace = _splitNRIC4[4],
          rest = _splitNRIC4.slice(5);

      return "".concat(combineToDate(year, month, day));
    }
  }, {
    key: "gender",
    get: function get() {
      var _splitNRIC5 = splitNRIC(this.id),
          _splitNRIC6 = _toArray(_splitNRIC5),
          input = _splitNRIC6[0],
          year = _splitNRIC6[1],
          month = _splitNRIC6[2],
          day = _splitNRIC6[3],
          birthPlace = _splitNRIC6[4],
          rest = _splitNRIC6.slice(5);

      return getGender(rest[1]);
    }
  }, {
    key: "age",
    get: function get() {
      var _splitNRIC7 = splitNRIC(this.id),
          _splitNRIC8 = _toArray(_splitNRIC7),
          input = _splitNRIC8[0],
          year = _splitNRIC8[1],
          month = _splitNRIC8[2],
          day = _splitNRIC8[3],
          birthPlace = _splitNRIC8[4],
          rest = _splitNRIC8.slice(5);

      var today = new Date();
      var combinedDate = new Date(year, month - 1, day);
      var age = today.getFullYear() - combinedDate.getFullYear();
      return age >= 100 ? age - 100 : age;
    }
  }]);

  return NRIC;
}();

module.exports = NRIC;