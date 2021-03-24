import Page from "../lib/models/page";


export default class ClockIn implements Page{

    public name = "Clock In";

    public render() {
        console.log("Running", this.name )
    }
    
    
}