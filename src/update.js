const shell = require('shelljs')

module.exports = function (name) {
    if (!name) {
        console.log('no file')
    }
    shell.cp('-rf', name + '/*', './')
    remove(name)

    function remove(name) {
        shell.rm('-rf', name)
    }
}