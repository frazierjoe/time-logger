import TimeFrame from "./timeframe";


export default class Rate extends TimeFrame {
    /**
     * hourly rate
     */
    pay: number;

    constructor({ start, end, pay }: Rate){
        super(start, end);
        this.pay = pay;
    }

}