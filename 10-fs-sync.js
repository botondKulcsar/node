const { readFileSync, writeFileSync } = require('fs');
// const fs = require('fs');
// fs.readFileSync() - the same thing
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`, 
    { flag: 'a' }
    );
// the { flag: 'a' } appends to the file leaving the existing content
console.log('done with this task');
console.log('starting the next one');