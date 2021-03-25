import { v4 } from 'uuid';
import Menu from '../../ui/Menu';
import { newDir } from '../utils/fileSystem';
import Logger from '../utils/Logger';
import Rate from './rate';

export default class Job{
    title: string;

    uid: string;

    rate: Rate;

    filePath?: string;

    constructor(title: string, rate: Rate){
        this.title = title;
        this.uid = v4();
        this.rate = rate;
        const suggestedPath = `./data/${this.uid}.json`
        try {
            newDir(suggestedPath);
            this.filePath = suggestedPath;
        }
        catch(err){
            this.filePath = undefined
            Logger.error(err);
        }
        finally{
            Menu.getInstance().render();
        }
    }
}