
export default class TimeFrame {
    start: Date;

    end?: Date;

    constructor(start: Date, end?: Date){
        this.start = start || new Date();
        this.end = end;
    }

    setStart(date: Date){
        this.start = date;
    }

    setEnd(date: Date){
        this.end = date;
    }

    getStart(){
        return this.start;
    }


    getEnd(): Date | undefined{
        return this.end;
    }
}
