import Job from './lib/models/Job';
import Menu from './ui/Menu';

const menu = new Menu();
menu.render();

export default class Application {
    private jobs: Job[];

    private instance?: Application;

    public getInstance(){
        if (this.instance === undefined){
            this.instance = new Application();
        }
        return this.instance;
    }

    private constructor(jobs?: Job[]) {
        this.jobs = jobs || [];
        this.run();
    }

    private run(){
        new Menu().render();
    }

    public getJobs(){
        return this.jobs;
    }

    public addJob(job: Job){
        this.jobs.push(job);
    }
}