const cron = require("node-cron");
const RequestDispatch = require("../RequestDispatch")
const logger = require('../config/Logger')

module.exports = class ScheduleRaise{
    constructor(){}

    async run(job){
        let name = job.name;
        let endpoint = job.endpoint;
        logger.debug(`Schedulling  ${name}, endpoint: ${endpoint}, cron: ${job.cron}`)
        await cron.schedule(job.cron, () => {
            new RequestDispatch().send(name, endpoint);
        });
    }
}