
const Promise     = require('bluebird');
const dbHandler   = require('../database').dbHandler;

exports.getUserConversation = getUserConversation;

function getUserConversation(logHandler, { channelId }) {
  return new Promise((resolve, reject) => {
    let query = ``;
    let queryObj = {
      query : query,
      args  : [channelId],
      event : "getUserConversation"
    };
    dbHandler.executeQuery(logHandler, queryObj).then((result) => {
      resolve(result);
    }, (error) => {
      reject(error);
    });
  });
}

//channel table

channel_id, channel_name, chat_type, last_message_id, creation_datetime, update_datetime

//channel mapping


channel_id, user_id, is_active, creation_datetime, update_datetime

// user

user_id, user_name, email_id, creation_datetime, update_datetime

// conversation

message_id, user_id, message, is_deleted, creation_datetime, update_datetime

// message history

message_id, seen_by_user_id, seen_at, creation_datetime, update_datetime