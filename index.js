const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = './data.json';
const DATE = moment().subtract(7, 'm').format();
const data = { date: DATE }; // Wrap the object in curly braces

jsonfile.writeFile(FILE_PATH, data, () => {
    console.log('Data written to file');
});

simpleGit()
    .add(FILE_PATH)
    .commit(DATE, { '--date': DATE })
    .push();
