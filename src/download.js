const download = require('download-git-repo');
const exists = require('fs').existsSync;
const shell = require('shelljs')

module.exports = (options, cb) =>{
    const name = options.name || 'kwe_zero';
    if (exists(name)) {
        shell.rm('-rf', name)
    }
    const asd = download(options.url, name, {
        clone: true
    }, (err) => {
        if (err) {
            console.log(err)
        } else {
            cb()
        }
    })
    console.log(asd);
}