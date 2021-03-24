export default interface Question{
    type: string;

    name: string;

    message: string;

    default: string | Number | Boolean | Array<string> | Function;
    
    choices: Array<string> | Function;

    validate: Function;

    filter: Function;

    transformer: Function;

    when: Function | Boolean;

    pageSize: Number;

    prefix: string;

    suffix: string;

    askAnswered: Boolean;

    loop: Boolean;
}