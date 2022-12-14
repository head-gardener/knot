import * as fs from 'fs';
import ncp from 'ncp';

const label = 'Pre-build succesful';
console.time(label);

if (fs.existsSync('build')) {
  fs.rmSync('build', { recursive: true, force: true });
}
if (!fs.existsSync('build')) {
  fs.mkdirSync('build');
}
if (!fs.existsSync('build/crawler')) {
  fs.mkdirSync('build/crawler');
}
if (!fs.existsSync('build/page')) {
  fs.mkdirSync('build/page');
}
if (!fs.existsSync('build/general')) {
  fs.mkdirSync('build/general');
}
if (!fs.existsSync('build/general/public')) {
  fs.mkdirSync('build/general/public');
}

ncp('src/crawler/static', 'build/crawler/static', { filter: (str) => { return !/\.js$/.test(str) } }, () => {});
ncp('src/page/static', 'build/page/static', { filter: (str) => { return !/\.js/.test(str) } }, () => {});

console.timeEnd(label);