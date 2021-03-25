import TimeFrame from "./timeframe";

export default class TimeSheet{
    private timeStamps: TimeFrame[];

    private clockedIn: boolean;

    constructor(){
        this.timeStamps = [];
        this.clockedIn = false;
    }

    clockIn(time?: Date){
        const start = time || new Date();
        const timeFrame = new TimeFrame(start);
        this.timeStamps.push(timeFrame);
        this.clockedIn = true;
    
    }

    clockOut(time?: Date){
        if (this.clockedIn){
            const end = time || new Date();
            const timeFrame = this.getRecentTimeStamp()
            timeFrame.end = end;
            // this.setRecentTimeStamp(timeFrame); //TODO is this needed?    
            this.clockedIn = false;
        }
        else{
            throw new Error('You are not clocked in.')
        }    
    }

    isClockedIn(){
        return this.clockedIn;
    }

    setRecentTimeStamp(timeFrame: TimeFrame){
        this.timeStamps[this.timeStamps.length - 1] = timeFrame;
    }

    getRecentTimeStamp(): TimeFrame{
        return this.timeStamps[this.timeStamps.length - 1];
    }
}