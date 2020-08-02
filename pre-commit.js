// Create a file .git/hooks/pre-commit with :
//
// node pre-commit.js
//
// and keep this file in your root folder. This will align the build number of your package with git

const fs = require('fs');
const { execSync } = require('child_process');
const package = require(__dirname+'/package.json');

package.build = parseInt(execSync("git log master --pretty=oneline | wc -l").toString())+1;
fs.writeFileSync(__dirname+'/package.json', JSON.stringify(package,null,"  "));
execSync("git add package.json");

// sed 's/^  "build": [0-9]*,/  "build": '"12"',/' package.json