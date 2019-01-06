const download = require('download-git-repo');
const update = require('./update');
const exists = require('fs').existsSync;
const shell = require('shelljs')

module.exports = (options, cb) =>{
    const name = options.name || 'kwe_zero';
    if (exists(name)) {
        shell.rm('-rf', name)
    }
    download(options.url, name, {
        clone: true
    }, (err) => {
        console.log(err ? 'Error' : 'Success')
        if (!err) {
            cb(name);
        }
    })
}