import inquirer, {QuestionCollection} from "inquirer";
import Page from "../lib/models/page";
import { clear } from "../lib/utils/helpers";
import ClockIn from "./ClockIn";
import ClockOut from "./ClockOut";



export default class Menu implements Page{
    public name = "Menu"

    choices = [ new ClockIn, new ClockOut ]

    question: QuestionCollection = [{
        type: 'list',
        name: this.name,
        message: "What would you like to do?",
        choices: this.choices.map((item: any) => item.name)

    }]

    public render(){
        clear();
        inquirer.prompt(this.question)
        .then((answer) => {
            const choice = this.choices.find((item) => item.name === answer[this.name])
            choice?.render();
        }).catch((err) => console.error(err))
    }
    
}