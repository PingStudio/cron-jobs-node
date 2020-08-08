const ScheduleRaise = require('./job/ScheduleRaise')
const JobExecution = require('./job/JobExecution')
const logger = require('./config/Logger')

module.exports = class Runner{
    async run() {
        logger.debug("Runner.run()")

        let url1 =  `${process.env.URL_1}`;
        let cron1 = `${new Date().getSeconds()} * * * * *`;//every 1min
        let job1 = new JobExecution('1', 'job1', url1, cron1);
        new ScheduleRaise().run(job1);

        let url2 =  `${process.env.URL_2}`;
        let cron2 = `0 ${new Date().getMinutes()} * * * *`;//every 1hr
        let job2 = new JobExecution('2', 'job2', url2, cron2);
        new ScheduleRaise().run(job2);

        let url3 =  `${process.env.URL_3}`;
        let cron3 = `${new Date().getSeconds()} 0/15 * * * *`;//every 15 min
        let job3 = new JobExecution('3', 'job3', url3, cron3);
        new ScheduleRaise().run(job3);

        let minutes = 2;
        await this.sleep(minutes);

    }

    async sleep(duration) {
        logger.debug(`Waiting ${duration} minutes`)
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, duration * 60000)
        })
    }
}