
const conversationValidator = require('./validator/validator');
const routeHandler               = require('./routeHandler/handler');

app.get('/conversation/getConversation', conversationValidator.getUserConversation, routeHandler.getUserConversationHandler);