const request = require("request");
const logger = require('./config/Logger')

module.exports = class RequestDispatch {

    constructor() {}

    send(name, endpoint){
        logger.debug(`Executing ${name}`);
        const requestOptions = {
            url: endpoint,
            method: 'GET',
            headers: {

            }
        };

        function requestCallBack(err, response, body){            
            if(err) {
                console.error(err);
            }
            else if(response.statusCode === 200){
                logger.debug(`Sent to: ${requestOptions.url}`);
            }
            else
                logger.debug(`Other`);
        }

        request(requestOptions, requestCallBack);
    }
}