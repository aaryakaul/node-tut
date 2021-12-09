const http = require('http');

const server = http.createServer((req, res) => {
  //   console.log('req', req);
  if (req.url === '/') {
    res.write('Welcome to our home page');
    res.end();
  } else if (req.url === '/about') {
    res.write('Welcome to our about page');
    res.end();
  } else {
    res.write(`
  <h1>Oops !</h1>
  <p>we can't find the page</p>
  <a href='/'>back to home</a>
  `);
    res.end();
  }
});

server.listen(5000);
