export interface INric {
    isNRICValid(value: string): boolean;
    randomNRICNumber(): string;
    formatNumber(value: string): string;
    unFormatNumber(value: string): string;
    getInfo(value:string): object;
}
