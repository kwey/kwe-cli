const shell = require('shelljs');
const fs = require('fs');
const exists = require('fs').existsSync;
const jsonfile = require('jsonfile')

const replacePackage = (options, packageurl) => {
    let pkg = JSON.parse(fs.readFileSync(packageurl), 'utf8')
    for (const key in options) {
        if (options.hasOwnProperty(key) && key !== 'branch') {
            pkg[key] = options[key];
        }
    }
    jsonfile.writeFile(packageurl, pkg, {spaces: 2, EOL: '\r\n'}, (err) => {
        err && console.error(err)
    })
}
const remove = (name) => {
    shell.rm('-rf', name)
}

const load = (options) => {
    let packageurl = './package.json'
    const dir = fs.readdirSync('./')
    console.log(dir);
    if (dir.length > 1) {
        packageurl = `./${options.name}/package.json`
    } else {
        shell.cp('-rf', options.name + '/*', './')
        shell.cp('-rf', options.name + '/\.*', './')
        remove(options.name)
    }
    replacePackage(options, packageurl)
}

module.exports = (type, options, list) => {
    switch (type) {
        case 'c':
            if (!options.name) {
                console.log('no file')
            }
            load(options)
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