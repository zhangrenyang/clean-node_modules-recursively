#!/usr/bin/env node
var process = require('child_process');
process.exec('find . -type d -name "node_modules" | xargs rm -rf',function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});