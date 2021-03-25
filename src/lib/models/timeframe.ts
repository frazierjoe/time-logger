export default class TimeFrame {
    start: Date;

    end?: Date;

    constructor(start: Date, end?: Date){
        this.start = start || new Date();
        this.end = end;
    }
}