# kwe-cli

**A simple CLI for template

> Be sure to use bilibili private npm registry.
## Installation
``` js
$ npm install -g kwe-cli
```

## Get Started
``` js
// git clone
$ git clone xxx
$ cd xxx

// init project
$ kwe-cli init

// npm install dependencies
$ npm install
```

## init
``` js
$ kwe-cli init
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
