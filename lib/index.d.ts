export default class NRIC {
    private nric;
    private splitedNRIC;
    constructor(_nric: string);
    get valid(): boolean;
    get birthDate(): string;
    get gender(): "F" | "M";
    get age(): number;
    private splitNRIC;
    private getGender;
}
