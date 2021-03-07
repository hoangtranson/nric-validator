"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_helper_1 = require("./util/date.helper");
var location_helper_1 = require("./util/location.helper");
var NRIC = /** @class */ (function () {
    function NRIC(_nric) {
        this.nric = _nric;
        this.splitedNRIC = this.splitNRIC(_nric);
    }
    Object.defineProperty(NRIC.prototype, "valid", {
        get: function () {
            var _a = this.splitedNRIC, input = _a[0], year = _a[1], month = _a[2], day = _a[3], birthPlace = _a[4], rest = _a.slice(5);
            var birthDate = date_helper_1.DATETIME.combineToDate(year, month, day);
            if (date_helper_1.DATETIME.inBetween(month, 1, 12) && date_helper_1.DATETIME.inBetween(day, 1, 31)) {
                return birthDate && location_helper_1.LOCATION.isStateValid(birthPlace);
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NRIC.prototype, "birthDate", {
        get: function () {
            var _a = this.splitedNRIC, input = _a[0], year = _a[1], month = _a[2], day = _a[3], birthPlace = _a[4], rest = _a.slice(5);
            return "" + date_helper_1.DATETIME.combineToDate(year, month, day);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NRIC.prototype, "gender", {
        get: function () {
            var _a = this.splitedNRIC, input = _a[0], year = _a[1], month = _a[2], day = _a[3], birthPlace = _a[4], rest = _a.slice(5);
            return this.getGender(rest[1]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NRIC.prototype, "age", {
        get: function () {
            var _a = this.splitedNRIC, input = _a[0], year = _a[1], month = _a[2], day = _a[3], birthPlace = _a[4], rest = _a.slice(5);
            var today = new Date();
            var combinedDate = new Date(year, month - 1, day);
            var age = today.getFullYear() - combinedDate.getFullYear();
            return age >= 100 ? age - 100 : age;
        },
        enumerable: false,
        configurable: true
    });
    NRIC.prototype.splitNRIC = function (id) {
        var regex = /^(\d{2})(\d{2})(\d{2})-?(\d{2})-?(\d{3})(\d{1})$/;
        var parts = id.match(regex);
        if (!parts) {
            throw new Error("Invalid value number format");
        }
        return parts;
    };
    NRIC.prototype.getGender = function (code) {
        return code % 2 === 0 ? "F" : "M";
    };
    return NRIC;
}());
exports.default = NRIC;
