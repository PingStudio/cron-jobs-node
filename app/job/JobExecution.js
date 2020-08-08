


module.exports = class JobExecution{
    constructor(id, name, endpoint, cron) {
        this.id = id;
        this.name = name;
        this.endpoint = endpoint;
        this.cron = cron;
    }
}