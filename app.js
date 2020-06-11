'use_strict';

// starting configuration
let allowedConfigs = new Set(['devdurgesh','dev','development','test','production','betaproduction', 'dev3002']);
if(!allowedConfigs.has(process.env.NODE_ENV)){
  console.log("please specify valid NODE_ENV to run server");
  return;
}

process.env.NODE_CONFIG_DIR = __dirname + '/configuration/';
config = require('config');

process.configuration = config;

/** @namespace */
/** @namespace process*/
/** @namespace process.env.NODE_ENV*/
/** @namespace console*/

//Importing and declaring Libraries
const express                                = require('express');
const http                                   = require('http');
const bodyParser                             = require('body-parser');
const path                                   = require('path');
const morgan                                 = require('morgan');
const requireg                               = require('requireg');
const dbHandler                              = require('./databases/mysql').dbHandler;
const logger                                 = require('./logging/logger');
const constants                              = require('./utils/constants');
const utils                                  = require('./utils/utility');
const chathandler                            = require('./modules/chatHanler/controller/controller');
let app                                      = express();

global.base_dir                = __dirname;
const logHandler = {
  apiModule : "server",
  apiHandler : "logger"
};

//add uuid to each request
app.use(function(req, res, next) {
  req.uuid = utils.generateRandomString(10);
  next();
});

//Api details listing
app.use(morgan(function (tokens, req, res) {
  return [
    '[', utils.getLoggingTime(),'-',req.uuid,']',
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens['response-time'](req, res), 'ms','-',
    tokens.res(req, res, 'content-length'),
  ].join(' ')
}));

// server and db up and running
app.get('/ping', function (req, res) {
  res.send(200, {}, { pong: true });
});

app.get('/heartbeat',  function(req, res, next) {
  dbHandler.query(logHandler, "heartbeat", 'SELECT 1 from DUAL WHERE 1 =1 ',[] , function(err, result){
    if(err) {
      return res.status(500).send('Internal server Error!');
    }
  });
});


const server = http.Server(app);

server.listen(process.env.PORT || config.get('PORT'), "localhost", function(error) {
  if (error) {
    console.error("Unable to listen on port", process.env.PORT || config.get('PORT'), error);
    return;
  }

  console.log("Express server is listening at port", process.env.PORT || config.get('PORT'));
});

const io = require('socket.io')(server);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', chathandler.handleSocket);

process.on("message", function(message){
  console.log("Received signal : " + message);
  if (message === 'shutdown') {
    console.log("Shutting down server");
    httpServer.close();
    setTimeout(function(){
      process.exit(0);
    }, 15000);
  }
});


global.io = io;
global.app = express.Router();


process.on("uncaughtException", function(err) {
  console.error(utils.getCurrentTime() + " uncaughtException: " + err.message);
  console.error(err);
  console.error(err.stack);
});

require('./modules');