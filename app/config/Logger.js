const pino = require("pino")

const logger = pino({
    level: process.env.LOG_LEVEL || 'debug',
    prettyPrint: {
        levelFirst: true
    },
    timestamp: pino.stdTimeFunctions.isoTime,
    prettifier: require('pino-pretty')
});

module.exports = logger;