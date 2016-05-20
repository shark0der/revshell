var package = require('./package.json');
var info = require('./info.js');

info.version = package.version;

module.exports = Object.assign(
  {},
  { version: package.version },
  info
);
