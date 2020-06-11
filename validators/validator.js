const Joi       = require('joi');
const responses = require('../responses/response');

exports.validateFields = validateFields;

function validateFields(req, res, schema) {
  const validation = Joi.validate(req, schema);
  if(validation.error) {
    let errorName = validation.error.name;
    let errorReason =
          validation.error.details !== undefined
            ? validation.error.details[0].message
            : 'Parameter missing or parameter type is wrong';
    responses.sendError(new Error(errorName + ' ' + errorReason), res);
    return false;
  }
  return true;
};