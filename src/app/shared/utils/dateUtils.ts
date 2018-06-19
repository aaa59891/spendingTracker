export class DateUtils{
    static getFirstDay(date: Date){
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }

    static getLastDay(date: Date){
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }

    static isEqual(date1: Date, date2: Date): boolean{
        return date1.toDateString() === date2.toDateString();
    }
}