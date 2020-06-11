
const ERROR = require('./responsMessages').ERROR;
const SUCCESS = require('./responsMessages').SUCCESS;

exports.sendError = function (err, res) {
  const errorMessage = err.customMessage || err.message || ERROR.eng.DEFAULT.customMessage;
  if(typeof err == 'object' && err.hasOwnProperty('statusCode') && err.hasOwnProperty('customMessage')) {
    return res.status(err.statusCode).send({ statusCode : err.statusCode, message : errorMessage, type : err.type || ERROR.eng.DEFAULT.type });
  }
  return res.status(400).send({ statusCode : 400, message : errorMessage, type : err.type || ERROR.eng.DEFAULT.type });
};


exports.sendSuccess = function (successMsg, data, res) {
  let statusCode   = successMsg.statusCode || 200;
  let message      = successMsg.customMessage || SUCCESS.DEFAULT.customMessage;
  let responseObj  = { statusCode : statusCode, message : message, data : data }

  return res.status(statusCode).send(responseObj);
};