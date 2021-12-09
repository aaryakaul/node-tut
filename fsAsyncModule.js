const { readFile, writeFile } = require('fs');

console.log('start');
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
        console.log('Done with the task');
      }
    );
  });
});
console.log('end');
