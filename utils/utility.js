const random            = require('random-int');
const _                 = require('underscore');
const fs                = require('node-fs');

exports.getLoggingTime       = getLoggingTime;
exports.getCurrentTime       = getCurrentTime;
exports.generateRandomString = generateRandomString;
exports.getMuid              = getMuid;
exports.getRandomString      = getRandomString;

function getLoggingTime() {
  let date = new Date();
  return  pad(date.getUTCMonth() + 1)
    + '-' + pad(date.getUTCDate())
    + ' ' + pad(date.getUTCHours())
    + ':' + pad(date.getUTCMinutes())
    + ':' + pad(date.getUTCSeconds())
    + '.' + String((date.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5);
}


function getCurrentTime() {
  return toISOString(new Date());
}

function generateRandomString(length, isNumbersOnly) {
  let charsNumbers = '0123456789';
  let charsLower = 'abcdefghijklmnopqrstuvwxyz';
  let charsUpper = charsLower.toUpperCase();
  let chars;

  if(isNumbersOnly) { chars = charsNumbers; } else { chars = charsNumbers + charsLower + charsUpper; }

  if(!length) length = 32;

  let string = '';
  for (let i = 0; i < length; i++) {
    let randomNumber = random(0, chars.length);
    randomNumber = randomNumber || 1;
    string += chars.substring(randomNumber - 1, randomNumber);
  }
  return string;
};

function getRandomString() {
  return exports.generateRandomString(10) + "_" + (new Date()).getTime();
};

function getMuid() {
  return exports.generateRandomString(36) + "." + (new Date()).getTime();
};

function toISOString(date) {
  return date.getUTCFullYear()
    + '-' + pad(date.getUTCMonth() + 1)
    + '-' + pad(date.getUTCDate())
    + 'T' + pad(date.getUTCHours())
    + ':' + pad(date.getUTCMinutes())
    + ':' + pad(date.getUTCSeconds())
    + '.' + String((date.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5)
    + 'Z';
}


function pad(number) {
  var r = String(number);
  if(r.length === 1) {
    r = '0' + r;
  }
  return r;
}
