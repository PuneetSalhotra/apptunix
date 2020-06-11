
const conversationController = require('../controller/controller');
const responses              = require('../../../responses/response');
const logger                 = require('../../../logging/logger');
const responseMessages       = require('../../../responses/responsMessages');

exports.getUserConversationHandler = getUserConversationHandler;

function getUserConversationHandler (req, res, next) {
  conversationController.getUserConversation(req.logHandler, req.query).then((data) => {
    responses.sendSuccess(responseMessages.SUCCESS.DATA_FETCHED_SUCCESSFULLY, data, res);
  }, (error) => {
    logger.error(req.logHandler, "Error occurred while getConversations", error);
    responses.sendError(error, res);
  });
}