import Job from './lib/models/job';
import { clear } from './lib/utils/helpers';
import Menu from './ui/Menu';


export default class Application {
    /**
     * collection of jobs
     */
    private jobs: Job[];

    /**
     * implements the singleton pattern
     */
    private static instance?: Application;

    public static getInstance(){
        if (this.instance === undefined){
            this.instance = new Application();
        }
        return this.instance;
    }

    private constructor(jobs?: Job[]) {
        this.jobs = jobs || []; //TODO pull from file system
        this.start();
    }

    /**
     * start the application
     */
    private start(){
        clear();
        new Menu().render();
    }

    /**
     * 
     * @param uid of job to get
     * @returns corresponding job
     */
    public getJob(uid: string){
        const job = this.jobs.find((job) => {
            return job.uid === uid
        });
        return job;
    }

    /**
     * 
     * @returns an array of all jobs
     */
    public getJobs(){
        return this.jobs;
    }

    /**
     * 
     * @param job to add to the collection of jobs
     */
    public addJob(job: Job){
        this.jobs.push(job);
    }
}