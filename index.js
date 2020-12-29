#!/usr/bin/env node
var spin = require('io-spin')
var process = require('child_process');
var spinner = spin('cleaning node_modules recursively')
spinner.start()
process.exec('find . -type d -name "node_modules" | xargs rm -rf',function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    spinner.stop()
    spinner.update('cleaning node_modules recursively')
});