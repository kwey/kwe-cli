#!/usr/bin/env node  
// github: https://github.com/KWEY/kwe-cli

const inquirer = require('inquirer');
const download = require('../src/download');
const update = require('../src/update');
const questions = require('../src/questions');
// const { execSync } = require('child_process');

const argv = require('yargs')
  .option('v', {
    alias : 'version',
  })
  .option('b', {
    alias : 'branch',
  })
  .usage('Usage: kwe-cli [options]')
  .example('kwe-cli', 'init zero')
  .help('h')
  .alias('h', 'help')
  .argv;

// version
if (argv.v) {
  console.log(require('../package.json').version);
}


// branch
// const b = argv.b;
// if (b && b !== true) {
//   const url = 'KWEY/kwe_zero#' + b;
//   download({url})
//   process.exit(1);
// }

// init
inquirer.prompt(questions).then((answers) =>{
  console.log(answers);
  inquirer.prompt([{
      type: 'confirm',
      name: 'isYes',
      message: 'Is this ok ?',
      default: true
  }]).then((answer) => {
      if (answer.isYes) {
          const branch = answers.branch;
          console.log(answers)
          download({
            url: 'KWEY/zero#' + branch,
            name: answers.name,
          }, (params) =>{
              console.log(params);
              update('c', answers)
          });

      }
  });
});
