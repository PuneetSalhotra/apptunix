'use_strict';

// starting configuration
let allowedConfigs = new Set(['devdurgesh','dev','development','test','production','betaproduction', 'dev3002']);
if(!allowedConfigs.has(process.env.NODE_ENV)){
  console.log("please specify valid NODE_ENV to run server");
  return;
}

process.env.NODE_CONFIG_DIR = __dirname + '/configuration/';
config = require('config');

let newrelic;
if(config.get('newRelicEnabled')){
  newrelic = require('newrelic');
}
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
const Config                                 = require('./Config');
const dbHandler                              = require('./databases/mysql').dbHandler;
const logger                                 = require('./logging/logger');
const constants                              = require('./utils/constants');
const utils                                  = require('./utils/utility');
let app                                      = express();



require('./modules');

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



// middlewares
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, app_version, device_type, access_token");

  next();
});


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


app.set('port', process.env.PORT || config.get('PORT'));

const httpServer = http.createServer(app);

httpServer.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

process.on("uncaughtException", function(err) {
  console.error(utils.getCurrentTime() + " uncaughtException: " + err.message);
  console.error(err.stack);
});

