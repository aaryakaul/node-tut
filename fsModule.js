// Synchronous
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
console.log('first : ', first);
console.log('second : ', second);

writeFileSync(
  './content/result-sync.txt',
  `Here is the result ${first} , ${second}`,
  { flag: 'a' } // this flag appends data in the existing file.
);

// Asynchronous
const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    return;
  }
  console.log('readFile result first  : ', result);
  const first = result;

  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      return;
    }
    console.log('readFile result second: ', result);
    const second = result;
    writeFile(
      './content/result-async.txt',
      `Here is the result ${first} , ${second}`,
      (err, result) => {
        if (err) {
          return;
        }
        console.log(result);
      }
    );
  });
});

console.log('yolo'); // this gets executed first then the above code because of callback.

// const second = readFileSync('./content/second.txt', 'utf-8');
// console.log('first : ', first);
// console.log('second : ', second);

// writeFileSync(
//   './content/result-sync.txt',
//   `Here is the result ${first} , ${second}`,
//   { flag: 'a' } // this flag appends data in the existing file.
// );
