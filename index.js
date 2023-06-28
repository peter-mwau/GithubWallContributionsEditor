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


// if you want to populate the githubwall with 100 random commits

// const jsonfile = require('jsonfile');
// const moment = require('moment');
// const simpleGit = require('simple-git');
// const random = require('random');

// const makeCommit = n => {
//     if (n===0) return simpleGit().push()
//     const x = random.int(0, 54)
//     const y = random.int(0, 6)

// const FILE_PATH = './data.json';
// const DATE = moment().subtract(1, 'y').add(1,'d').add(x, 'w').add(y, 'w').format();
// const data = { date: DATE }; // Wrap the object in curly braces

// jsonfile.writeFile(FILE_PATH, data, () => {
//     simpleGit()
//     .add([FILE_PATH])
//     .commit(DATE, { '--date': DATE }),
//     makeCommit.bind(this, --n)
// });
// };

// makeCommit(100)


