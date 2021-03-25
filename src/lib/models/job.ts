import { v4 } from 'uuid';
import { newDir } from '../utils/fileSystem';
import Logger from '../utils/Logger';
import Rate from './rate';
import TimeFrame from './timeframe';

export default class Job{
    title: string;

    company: string;

    uid: string;

    rateTimeline: Rate[];

    timeSheet: TimeFrame[];

    filePath?: string;

    constructor(title: string, company: string, rateTimeline?: Rate[], timeSheet?: TimeFrame[]){
        this.title = title;
        this.company = company;
        this.uid = v4();
        this.rateTimeline = rateTimeline || [];
        this.timeSheet = timeSheet || [];
        const suggestedPath = `./data/${this.uid}.json`
        try {
            newDir(suggestedPath);
            this.filePath = suggestedPath;
        }
        catch(err){
            this.filePath = undefined
            Logger.error(err);
        }
    }
}