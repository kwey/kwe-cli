const shell = require('shelljs');
const fs = require('fs');
const exists = require('fs').existsSync;
const path = require('path');
const jsonfile = require('jsonfile')
const colors = require('colors')

const replacePackage = (options) => {
    const file = './package.json'
    let pkg = JSON.parse(fs.readFileSync('./package.json'), 'utf8');
    for (const key in options) {
        if (options.hasOwnProperty(key) && key !== 'branch') {
            pkg[key] = options[key];
        }
    }
    jsonfile.writeFile(file, pkg, {spaces: 2, EOL: '\r\n'}, (err) => {
        console.error(err)
    })
}
const remove = (name) => {
    shell.rm('-rf', name)
}
module.exports = (type, options, list) => {
    switch (type) {
        case 'c':
            if (!options.name) {
                console.log('no file')
            }
            shell.cp('-rf', options.name + '/*', './')
            shell.cp('-rf', options.name + '/\.*', './')
            remove(options.name)
            replacePackage(options)
            break;
        case 'd':  // update document
            for (const name of list) {
                if (exists(name)) {
                    shell.cp('-rf', options.name + '/' + name, './')
                }
            }
            remove(options.name)
            console.log('Success'.green, list)
            break;
        case 'f': // update file
            for (const name of list) {
                if (exists(name)) {
                    shell.cp('-rf', options.name + '/' + name + '/*', './' + name)
                }
            }
            remove(options.name)
            console.log('Success'.green, list)
            break;
    
        default:
            break;
    }
}