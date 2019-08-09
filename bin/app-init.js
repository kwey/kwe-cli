#!/usr/bin/env node

'use strict';
const inquirer = require('inquirer');
const download = require('../src/download');
const update = require('../src/update');
const questions = require('../src/questions');
const branchs = {
    s: 'simple',
    r: 'rollup',
    m: 'master',
    simple: 'simple',
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
                const branch = branchs[answers.branch] || 'masters';
                console.log('Downloading...')
                download({
                    url: 'kwey/zero#' + branch,
                    name: answers.name,
                  }, () => {
                    update('c', answers)
                });
    
            }
        });
    });
}

module.exports = init;

