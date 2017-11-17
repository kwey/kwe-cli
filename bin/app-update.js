#!/usr/bin/env node  

const update = require('../src/update');
const downloadTem = require('../src/download');
const argv = require('yargs')
          .usage('Usage: $0 <command> [options]');
const files = argv
          .alias('b', 'branch')
          .alias('f', 'file')
          .argv;
const document = argv
          .alias('b', 'branch')
          .alias('d', 'document')
          .argv;

const branch = files.b || 'master'

if(files.file) {
  files._[files._.length - 1] = files.f
  downloadTem({branch: branch}, function(name) {
    update('f', {name: name}, files._)
  })
} else if(document.document) {
  document._[files._.length - 1] = document.d
  downloadTem({branch: branch}, function(name) {
    update('d', {name: name}, document._)
  })
}
