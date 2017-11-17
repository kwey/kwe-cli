#!/usr/bin/env node  
// github: https://github.com/KWEY/kwe-cli
var program = require('commander');
var colors = require('colors');
program
.version(require('../package.json').version)
.option('-v, --version', 'version')
.option('-D, --document', 'update document')
.option('-F, --file', 'update file')
.option('-T, --no-tests', 'ignore test hook');

program
.usage('<command> [options]')
.command('init', '初始化 template');

program
.usage('<command> [options]')
.command('update <name> [options]', '局部更新');


program
.command('*')
.action(function(env, options){
  console.log('deploying "%s"'.green, env);
});
program.parse(process.argv);