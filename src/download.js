const download = require('download-git-repo');
const exists = require('fs').existsSync;
const shell = require('shelljs')

module.exports = (options, cb) =>{
    const name = options.name || 'kwe_zero';
    if (exists(name)) {
        shell.rm('-rf', name)
    }
    console.log(options);
    download(options.url, name, {
        clone: true
    }, (err) => {
        console.log(err ? err : 'Success')
        if (!err) {
            cb();
        }
    })
}