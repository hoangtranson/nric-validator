"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATETIME = void 0;
var DATETIME;
(function (DATETIME) {
    var dateIsBefore = function (before, max) {
        var bNorm = new Date(0, before.getMonth(), before.getDate());
        var mNorm = new Date(0, max.getMonth(), max.getDate());
        return bNorm < mNorm;
    };
    DATETIME.combineToDate = function (year, month, day) {
        var today = new Date();
        var combinedDate = new Date(year, month, day);
        var age = today.getFullYear() - combinedDate.getFullYear();
        if (age > 100 || (age == 100 && dateIsBefore(combinedDate, today))) {
            combinedDate.setFullYear(combinedDate.getFullYear() + 100);
        }
        return combinedDate;
    };
    DATETIME.inBetween = function (value, min, max) {
        return value >= min && value <= max;
    };
})(DATETIME = exports.DATETIME || (exports.DATETIME = {}));
