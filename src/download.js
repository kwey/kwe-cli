
var download = require('download-git-repo');
var update = require('./update');

module.exports = function (options, cb) {
    var branch = options.branch || 'master';
    var name = options.name || 'kwe_template';
    console.log(123123123123)
    download('KWEY/kwe_template#' + branch, name, { clone: true }, function (err) {
        console.log(err ? 'Error' : 'Success')
        if (!err) {
            cb(name);
            update(name)
        }
    })
}

