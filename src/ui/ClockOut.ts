import Page from "../lib/models/page";

export default class ClockOut implements Page{

    public name = "Clock Out"

    public render() {
        console.log("Running", this.name )
    }
    
}