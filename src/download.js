const download = require('download-git-repo');
const update = require('./update');
const exists = require('fs').existsSync;
const shell = require('shelljs')

module.exports = function(options, cb) {
    const branch = options.branch || 'master';
    const name = options.name || 'kwe_template';
    if (exists(options.name)) {
        shell.rm('-rf', options.name)
    }
    download('KWEY/kwe_template#' + branch, name, {
        clone: true
    }, function(err) {
        console.log(err ? 'Error' : 'Success')
        if (!err) {
            update(options)
            cb(name);
        }
    })
}