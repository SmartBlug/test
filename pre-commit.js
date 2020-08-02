const fs = require('fs');
const { execSync } = require('child_process');
const package = require(__dirname+'/package.json');

package.build = parseInt(execSync("git log master --pretty=oneline | wc -l").toString())+1;
fs.writeFileSync(__dirname+'/package.json', JSON.stringify(package,null,"  "));
execSync("git add package.json");