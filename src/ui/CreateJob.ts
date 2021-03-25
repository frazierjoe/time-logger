import inquirer, { QuestionCollection } from "inquirer";
import Page from "../lib/models/page";
import Menu from "./Menu";

export default class CreateJob implements Page{
    public name = "Create Job";

    private question: QuestionCollection = [
        {
            type: 'input',
            name: this.name,
            message: "Name of Job:"
        }
    ]

    private static instance?: CreateJob;

    public static getInstance(){
        if (this.instance === undefined){
            this.instance = new CreateJob();
        }
        return this.instance;
    }

    public render() {
        inquirer.prompt(this.question)
        .then((answer) => {
            const job = answer[this.name]
            
        })
        .catch((err) => {

        })
        .finally(() => {
            Menu.getInstance().render()
        })
    }
}