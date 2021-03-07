export namespace DATETIME {

    const dateIsBefore = (before: Date, max: Date) => {
        const bNorm = new Date(0, before.getMonth(), before.getDate());
        const mNorm = new Date(0, max.getMonth(), max.getDate());
    
        return bNorm < mNorm;
    };

    export const combineToDate = (year: number, month: number, day: number) => {
        const today = new Date();
        const combinedDate = new Date(year, month, day);
    
        const age = today.getFullYear() - combinedDate.getFullYear();
    
        if (age > 100 || (age == 100 && dateIsBefore(combinedDate, today))) {
          combinedDate.setFullYear(combinedDate.getFullYear() + 100);
        }
    
        return combinedDate;
      };

    export const inBetween = (value: number, min: number, max: number) => value >= min && value <= max;
}