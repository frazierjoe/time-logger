import inquirer, { QuestionCollection } from "inquirer";
import Application from "..";
import Job from "../lib/models/job";
import Page from "../lib/models/page";
import { clear } from "../lib/utils/helpers";
import Logger from "../lib/utils/Logger";

export default class CreateJob implements Page{
    public name = "Create Job";

    private question: QuestionCollection = [
        {
            type: 'input',
            name: 'title',
            message: "Job Title:",
            default: "Software Developer"
        },
        {
            type: 'input',
            name: 'company',
            message: "Company:",
            default: "Boring Company"
        },
    ]

    private static instance?: CreateJob;

    public static getInstance(){
        if (this.instance === undefined){
            this.instance = new CreateJob();
        }
        return this.instance;
    }

    public render(callback: Function) {
        const application = Application.getInstance();
        inquirer.prompt(this.question)
        .then((answer) => {
            const job = new Job(answer.title, answer.company);
            application.addJob(job);
        })
        .catch((err) => {
            Logger.error(`Error creating job: ${err}`);
        })
        .finally(() => {    
            clear();
            Logger.success('Created Job Successfully!');
            callback();
        })
    }
}