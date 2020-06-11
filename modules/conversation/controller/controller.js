
const _                   = require('underscore');
const Promise             = require('bluebird');
const constants           = require('../../../utils/constants');
const conversationService = require('../service/service');

exports.getUserConversation = getUserConversation;


function getUserConversation(logHandler, payload) {
  return new Promise((resolve, reject) => {
    Promise.coroutine(function *() {
      let userId = payload.user_id;
      let userConversation = conversationService.getUserConversation(logHandler, { userId });

      let channelIds = [];
      for(let row of userConversation) {
        channelIds.push(row.channel_id);
      }

      let userUnreadCount = conversationService.getUnreadCount(logHandler, channelIds, userId);

      for(let row of userConversation) {
        row.unread_count = userUnreadCount[row.channel_id] || 0;
        if(row.chat_type == constants.chatType.oneToOne) {
          row.label = row.last_sent_by_full_name;
        } else {
          row.label = row.channel_name;
        }
      }

      return userConversation;
    })().then((data) => {
      resolve(data);
    }, (error) => {
      reject(error);
    });
  });
}