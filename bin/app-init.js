#!/usr/bin/env node

'use strict';
const inquirer = require('inquirer');
const download = require('../src/download');
const update = require('../src/update');
const rollup = require('../src/rollup');
const questions = require('../src/questions');
const branchs = {
    r: 'rollup',
    m: 'master',
    rollup: 'rollup',
    master: 'master',
}
const init = () => {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        inquirer.prompt([{
            type: 'confirm',
            name: 'isYes',
            message: 'Is this ok ?',
            default: true
        }]).then((answer) => {
            if (answer.isYes) {
                let url = 'kwey/zero#master'
                const isRollup = branchs[answers.branch] === 'rollup'
                if (isRollup) {
                    url='kwey/rollup#main'
                }
                console.log('Downloading...')
                download({
                    url,
                    name: answers.name,
                  }, () => {
                      if (isRollup) {
                        rollup(answers)
                      } else {
                          update('c', answers)
                      }
                });
    
            }
        });
    });
}

module.exports = init;

