import figlet from 'figlet';
import { clear } from '../lib/utils/helpers';
import Logger from '../lib/utils/Logger';

export default class Title{

    public static render(){
        Logger.log(figlet.textSync('time-logger'));
    }
}