const shell = require('shelljs');
const fs = require('fs');
const path = require('path');
const jsonfile = require('jsonfile')

function replacePackage(options) {
    const file = './package.json'
    let pkg = JSON.parse(fs.readFileSync('./package.json'), 'utf8');
    for (const key in options) {
        if (options.hasOwnProperty(key) && key !== 'branch') {
            pkg[key] = options[key];
        }
    }
    jsonfile.writeFile(file, pkg, {spaces: 2, EOL: '\r\n'}, function (err) {
        console.error(err)
    })
}
module.exports = function (options) {
    if (!options.name) {
        console.log('no file')
    }
    shell.cp('-rf', options.name + '/*', './')
    remove(options.name)
    replacePackage(options)
    function remove(name) {
        shell.rm('-rf', name)
    }
}