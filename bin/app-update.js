#!/usr/bin/env node

const update = require("../src/update");
const download = require("../src/download");
const argv = require("yargs").usage("Usage: $0 <command> [options]");

const files = argv.alias("b", "branch").alias("f", "file").argv;
const document = argv.alias("b", "branch").alias("d", "document").argv;

const branch = files.b || "master";
const name = "Update";

if (files.file) {
  console.log('Downloading...')
  files._.push(files.f)
  download(
    {
      name,
      url: "kwey/zero#" + branch
    },
    () => {
      update("f", { name }, files._);
    }
  );
} else if (document.document) {
  console.log('Downloading...')
  document._.push(document.d)
  download(
    {
      name,
      url: "kwey/zero#" + branch
    },
    () => {
      update("d", { name }, document._);
    }
  );
}
