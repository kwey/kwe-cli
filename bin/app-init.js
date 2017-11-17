#!/usr/bin/env node

'use strict';
const fs = require('fs');
const inquirer = require('inquirer');
const downloadTem = require('../src/download');
const update = require('../src/update');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the project name :',
        default: 'kwe_cli'
    },
    {
        type: 'input',
        name: 'version',
        message: 'Enter the version :',
        default: '1.0.0'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the description:',
    },
    {
        type: 'input',
        name: 'author',
        message: 'Enter the auther :',
        default: 'kwe'
    },
    {
        type: 'input',
        name: 'branch',
        message: 'Enter the branch :',
        default: 'master'
    }

]
inquirer.prompt(questions).then(function (answers) {
    console.log(answers);
    inquirer.prompt([{
        type: 'confirm',
        name: 'isYes',
        message: 'Is this ok ?',
        default: true
    }]).then(function (answer) {
        if (answer.isYes) {
            console.log(answers)
            downloadTem(answers, function (params) {
                console.log(params);
                update('c', answers)
            });

        }
    });
});

