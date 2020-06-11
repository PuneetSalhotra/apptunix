
const Promise     = require('bluebird');
const dbHandler   = require('../../../databases/mysql').dbHandler;

exports.getUserConversation = getUserConversation;
exports.getUnreadCount = getUnreadCount;

function getUserConversation(logHandler, { userId, pageStart = 0, pageEnd = 20 }) {
  return new Promise((resolve, reject) => {

    let values = [userId];
    let placeholder = "";

    if(pageStart){
      placeholder = "LIMIT ? , ?";
      values.push(Math.abs(pageStart - 1), Math.abs(pageEnd - pageStart + 1))
    }

    let query = ` SELECT
                      utc.channel_id,
                      customer.user_id,
                      c.chat_type,
                      uc.created_at as date_time,
                      uc.message as full_message,
                      COALESCE(last_message_user.user_id, -1) AS last_sent_by_id,
                      COALESCE(last_message_user.full_name, "") AS last_sent_by_full_name,
                      COALESCE(last_message_user.user_type, -1) AS last_sent_by_user_type
                  FROM
                      user_to_channel utc
                          LEFT JOIN
                      channels c ON c.channel_id = utc.channel_id
                          LEFT JOIN
                      users AS customer ON customer.user_id = utc.user_id
                          LEFT JOIN
                      users_conversation uc ON  uc.id = uc.last_message_id 
                          LEFT JOIN
                      users as last_message_user ON last_message_user.user_id = uc.user_id
                  WHERE
                      utc.user_id = ?
                          AND message is not null
                  ORDER BY c.status, uc.last_message_id ${placeholder}`;

    let queryObj = {
      query : query,
      args  : values,
      event : "getUserConversation"
    };

    dbHandler.executeQuery(logHandler, queryObj).then((result) => {
      resolve(result);
    }, (error) => {
      reject(error);
    });
  });
}


function getUnreadCount(logHandler, channel_ids, user_id) {
  return new Promise((resolve, reject) => {
    if(_.isEmpty(channel_ids)) {
      return resolve({});
    }
    let query = `SELECT
                      ch.channel_id, COUNT(*) AS unread_count
                  FROM
                  user_to_channel ch
                          LEFT JOIN
                       users_conversation uc ON ch.channel_id = uc.channel_id
                  WHERE
                      ch.channel_id IN (?) AND ch.user_id = ? AND uc.id > ch.last_read_message_id
                  GROUP BY ch.channel_id`;
    let queryObj = {
      query : query,
      args  : [channel_ids, user_id],
      event : "getUnreadCount"
    };
    dbHandler.executeQuery(logHandler, queryObj).then((result) => {
      let channelToUnreadCount = {};
      for (let i = 0; i < result.length; i++) {
        channelToUnreadCount[result[i].channel_id] = result[i].unread_count;
      }
      resolve(channelToUnreadCount);
    }, (error) => {
      reject(error);
    });
  });
}

//channel table

// channel_id, channel_name, chat_type, last_message_id, creation_datetime, update_datetime

//channel mapping

// id, channel_id, user_id, last_read_message_id, is_active, creation_datetime, update_datetime

// user

// user_id, user_name, email_id, creation_datetime, update_datetime

// user_conversation

// message_id, user_id, message,  is_deleted, creation_datetime, update_datetime

// message history

// id, last_seen_message_id, channel_id, seen_by_user_id, seen_at, creation_datetime, update_datetime