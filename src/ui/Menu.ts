import inquirer, {QuestionCollection} from "inquirer";
import Page from "../lib/models/page";
import ClockIn from "./ClockIn";
import ClockOut from "./ClockOut";
import Title from "./Title";



export default class Menu implements Page {

    public name = "Menu"

    private static choices = [ new ClockIn, new ClockOut ]

    private static instance?: Menu;

    public static getInstance(){
        if (this.instance === undefined){
            this.instance = new Menu();
        }
        return this.instance;
    }

    private static question: QuestionCollection = [{
        type: 'list',
        name: Menu.name,
        message: "What would you like to do?",
        choices: Menu.choices.map((item: any) => item.name)
    }]

    public render(){
        Title.render();
        inquirer.prompt(Menu.question)
        .then((answer) => {
            const choice = Menu.choices.find((item) => item.name === answer[this.name])
            choice?.render();
        }).catch((err) => console.error(err))
    }

    
}