
const Joi                           = require('joi');
const logger                        = require('../../../logging/logger');
const validator                = require('../../../validators/validator');



exports.getUserConversation = function (req, res, next) {
  req.logHandler = {
    uuid       : req.uuid,
    apiModule  : "user",
    apiHandler : "conversation"
  };
  logger.trace(req.logHandler, { REQUEST : req.body });

  const schema = Joi.object().keys({
    access_token : Joi.string().required(),
    limit        : Joi.number().positive().optional().default(1),
    offset       : Joi.number().positive().optional()
  });

  let validFields = validator.validateFields(req.query, res, schema);
  if(validFields) {
    next()
  }
};