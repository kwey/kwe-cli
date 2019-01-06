#!/usr/bin/env node

'use strict';
const fs = require('fs');
const inquirer = require('inquirer');
const download = require('../src/download');
const update = require('../src/update');
const questions = require('../src/questions');

inquirer.prompt(questions).then((answers) => {
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
              }, (params) => {
                console.log(params);
                update('c', answers)
            });

        }
    });
});

