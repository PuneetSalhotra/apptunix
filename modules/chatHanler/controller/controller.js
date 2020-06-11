

const utils = require('../../../utils/utility');
const logger = require('../../../logging/logger');
const Promise = require('bluebird');

exports.handleSocket    = async function (socket) {
  const logHandler = {
    uuid       : utils.generateRandomString(10),
    apiModule  : "chathandler",
    apiHandler : "handleSocket"
  };

  socket.emit('ack', {
    greeting: 'Hello User'
  });

  socket.on('message', function(data, callback) {
    handlePublish(data, callback);
  });

  // when the user disconnects.
  socket.on('disconnect',  () => {
    console.log("DISCONNECTED USERS");
  });
};

function handlePublish(opts, callback) {
  const logHandler = {
    uuid       : utils.generateRandomString(10),
    apiModule  : "chathandler",
    apiHandler : "handlePublish"
  };
  if(!callback) {
    callback = function () {
    };
  }
  // let error={};
  Promise.coroutine(function* () {
    // the user validation
    // channel checking
    // insert into messae
    // sync messsage history for unread count

    return {};
  })().then((data) => {
    callback(null, data);
  }, (error) => {
    logger.error(logHandler,"ERROR WHILE SENDING MESSAGE", error);
    callback(error);
  });
};

