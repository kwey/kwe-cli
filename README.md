# kwe-cli

**A simple CLI for zero

> To use zero.

**template

> https://github.com/KWEY/zero
## Installation
``` js
$ npm install -g kwe-cli
```

## Get Started
``` js
// init project
$ kwe-cli init
 or kwe-cli

// npm install dependencies
$ npm install
```

## Update From Template
```
// update  file
$ kwe-cli update -f package.json [-b master]
$ kwe-cli update -f base.config.js  readme.md [-b master]

// update document
$ kwe-cli update -d build [-b master]
$ kwe-cli update -d demo build [-b master]
```

## Note
```
默认下载master分支代码，branch: s（下载simpl分支代码）、r(下载rollup分支代码)

（当前文件夹如果为空则不创建文件夹）
const dir = fs.readdirSync('./')
if (dir.length > 1) {
    packageurl = `./${options.name}/package.json`
} else {
    shell.cp('-rf', options.name + '/*', './')
    shell.cp('-rf', options.name + '/\.*', './')
    remove(options.name)
}
```