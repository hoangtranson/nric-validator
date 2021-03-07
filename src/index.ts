import { DATETIME } from "./util/date.helper";
import { LOCATION } from "./util/location.helper";

export default class NRIC {
  private nric: string;
  private splitedNRIC: any[];

  constructor(_nric: string) {
    this.nric = _nric;
    this.splitedNRIC = this.splitNRIC(_nric);
  }

  get valid() {
    const [input, year, month, day, birthPlace, ...rest] = this.splitedNRIC;
    const birthDate = DATETIME.combineToDate(year, month, day);

    if (DATETIME.inBetween(month, 1, 12) && DATETIME.inBetween(day, 1, 31)) {
      return birthDate && LOCATION.isStateValid(birthPlace);
    }
    return false;
  }

  get birthDate() {
    const [input, year, month, day, birthPlace, ...rest] = this.splitedNRIC;
    return `${DATETIME.combineToDate(year, month, day)}`;
  }

  get gender() {
    const [input, year, month, day, birthPlace, ...rest] = this.splitedNRIC;
    return this.getGender(rest[1]);
  }

  get age() {
    const [input, year, month, day, birthPlace, ...rest] = this.splitedNRIC;
    const today = new Date();
    const combinedDate = new Date(year, month - 1, day);
    const age = today.getFullYear() - combinedDate.getFullYear();
    return age >= 100 ? age - 100 : age;
  }

  private splitNRIC(id: string) {
    const regex = /^(\d{2})(\d{2})(\d{2})-?(\d{2})-?(\d{3})(\d{1})$/;
    const parts = id.match(regex);

    if (!parts) {
      throw new Error("Invalid value number format");
    }

    return parts;
  }

  private getGender(code: number) {
    return code % 2 === 0 ? "F" : "M";
  }
}
