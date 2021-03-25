import Page from "../lib/models/page";
import Logger from "../lib/utils/Logger";


export default class ClockIn implements Page{

    public name = "Clock In";

    public render() {
        Logger.log("Running")
    }
    
    
}