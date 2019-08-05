#!/usr/bin/env node  
// github: https://github.com/KWEY/kwe-cli

const init = require('./app-init');

const argv = require('yargs')
  .option('v', {
    alias : 'version',
  })
  .usage('Usage: kwe-cli [options]')
  .example('kwe-cli init', '创建简版ts')
  .help('h')
  .alias('h', 'help')
  .argv;

// version
if (argv.v) {
  console.log(require('../package.json').version);
}

// init
init()