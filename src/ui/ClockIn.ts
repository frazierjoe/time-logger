import inquirer from "inquirer";
import Application from "../index";
import Page from "../lib/models/page";
import Logger from "../lib/utils/Logger";


export default class ClockIn implements Page{

    public name = "Clock In";

    public render() {
        const application = Application.getInstance();
        const jobs = application.getJobs();
        const question = {
            type: 'list',
            name: ClockIn.name,
            message: "Select a job to clock-in to",
            choices: jobs.map((job) => {
                return {name: `${job.title}@${job.company}`, value: job.uid};
            })
        }
        inquirer.prompt([question])
        .then((answer) => {
            const uid = answer[ClockIn.name]
            const job = application.getJob(uid);
            //TODO
        })
        .catch((err) => {
            Logger.error(`Error clocking in: ${err}`)
        })
        
    }
    
    
}