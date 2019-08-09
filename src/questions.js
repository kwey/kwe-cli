
module.exports = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the project name :',
        default: 'KweZero'
    },
    {
        type: 'input',
        name: 'version',
        message: 'Enter the version :',
        default: '0.0.0'
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
        message: 'Enter the branch （s: simple, r: rollup）:',
        default: 'master'
    },
    {
        type: 'input',
        name: 'unit',
        message: 'require unit testing（y/n）:',
        default: 'y'
    },
    {
        type: 'input',
        name: 'e2e',
        message: 'require e2e testing（y/n）:',
        default: 'y'
    }

]