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
$ kwe-cli-init
 or kwe-cli

// npm install dependencies
$ npm install
```

<!-- ## Update From Template
``` js
// update  document
$ kwe-cli-update -d package.json [-b master]
$ kwe-cli-update -d base.config.js  readme.md [-b master]
```
``` js
// update file
$ kwe-cli-update -f src [-b master]
$ kwe-cli-update -f demo src [-b master]
``` -->

## Parameters
项目名称，对外暴露的类名（建议采用首字母大写的驼峰命名）
```
-name: (default: 'KweZero') 
```
项目版本号
```
-version: (default: '0.0.0') 
```
项目描述
```
-description: (default: '') 
```
项目作者
```
-author: (default: 'kwe') 
```
项目下载分支
```
-branch: (default: 'master', r:rollup) 
```
项目是否采用单元测试
```
-unit: (default: 'y') 
```
项目是否采用e2e测试
```
-e2e: (default: 'y') 
```

## Note
```
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
