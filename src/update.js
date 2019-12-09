const shell = require("shelljs");
const fs = require("fs");
const exists = require("fs").existsSync;
const jsonfile = require("jsonfile");

const remove = name => {
  shell.rm("-rf", name);
};
const toUpperCase = str => {
  return str[0].toUpperCase() + str.slice(1);
};

const replacePackage = (options, url) => {
  let pkg = JSON.parse(fs.readFileSync(url + "package.json"), "utf8");

  for (const key in options) {
    if (options.hasOwnProperty(key)) {
      switch (key) {
        case "branch":
        case "unit":
        case "e2e":
          break;
        case "name":
          pkg[key] = options[key].toLowerCase();
          break;
        default:
          pkg[key] = options[key];
          break;
      }
    }
  }
  if (options.unit === "n") {
    remove(url + "__tests__");
    remove(url + "jest.config.js");
    delete pkg.scripts.jest;
    delete pkg.devDependencies["@types/jest"];
    delete pkg.devDependencies["@types/chai"];
    delete pkg.devDependencies["ts-jest"];
    delete pkg.devDependencies["jest"];
    delete pkg.devDependencies["chai"];
  }
  if (options.e2e === "n") {
    remove(url + "cypress");
    remove(url + "cypress.json");
    delete pkg.scripts.e2e;
    delete pkg.devDependencies.cypress;
  }
  jsonfile.writeFile(
    url + "package.json",
    pkg,
    { spaces: 2, EOL: "\r\n" },
    err => {
      err && console.error(err);
    }
  );
};

const formatFile = (options, url) => {
  replacePackage(options, url);
  replacebag(options.name, url + "src/index.ts");
  replacebag(options.name, url + "webpack.config.js");
  replacebag(options.name, url + "src/static/less/global.less");
  replacebag(options.name, url + "demo/index.html");
  if (options.e2e !== "n") {
    replacebag(options.name, url + "cypress/integration/sample_spec.js");
  }
};

const replacebag = (name, url) => {
  let index = fs.readFileSync(url, "utf8");
  index = index.replace(/KWE/g, toUpperCase(name));
  index = index.replace(/kwe/g, name.toLowerCase());

  fs.writeFileSync(url, index);
};

const load = options => {
  let packageurl = "./";
  const dir = fs.readdirSync("./");
  if (dir.length > 1) {
    packageurl = `./${options.name}/`;
  } else {
    shell.cp("-rf", options.name + "/*", "./");
    shell.cp("-rf", options.name + "/.*", "./");
    remove(options.name);
  }
  formatFile(options, packageurl);
};

module.exports = (type, options, list) => {
  switch (type) {
    case "c":
      if (!options.name) {
        console.log("no file");
      }
      load(options);
      console.log("Completed");
      break;
    case "d": // update document
      for (const name of list) {
        if (exists(name)) {
          shell.cp("-rf", options.name + "/" + name, "./");
        }
      }
      remove(options.name);
      console.log("Completed", list);
      break;
    case "f": // update file
      for (const name of list) {
        if (exists(name)) {
          shell.cp("-rf", options.name + "/" + name + "/*", "./" + name);
        }
      }
      remove(options.name);
      console.log("Completed", list);
      break;

    default:
      break;
  }
};
