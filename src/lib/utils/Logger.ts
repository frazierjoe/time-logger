import chalk from 'chalk';

export default class Logger{
    static error(args: any){
        console.log(chalk.red(args));
    }

    static log(args: any){
        console.log(chalk.white(args));
    }

    static success(args: any){
        console.log(chalk.green(args));
    }

}