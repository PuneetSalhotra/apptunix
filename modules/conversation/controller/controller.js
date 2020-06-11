
const _                   = require('underscore');
const Promise             = require('bluebird');
const constants           = require('../../../utils/constants');
const conversationService = require('../service/service');

exports.getUserConversation = getUserConversation;

function getUserConversation(logHandler, payload) {
  return new Promise((resolve, reject) => {
    Promise.coroutine(function *() => {
      let channelId = payload.channel_id;
      let userConversation = conversationService.getUserConversation(logHandler, { channelId });

      for(let row of userConversation) {
        if(row.chat_type == constants.chatType.OneToOne) {
          row.label = row.other_user_name
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