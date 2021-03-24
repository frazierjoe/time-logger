export default interface Question{
    type: String;

    name: String;

    message: String;

    default: String | Number | Boolean | Array<String> | Function;
    
    choices: Array<String> | Function;

    validate: Function;

    filter: Function;

    transformer: Function;

    when: Function | Boolean;

    pageSize: Number;

    prefix: String;

    suffix: String;

    askAnswered: Boolean;

    loop: Boolean;
}