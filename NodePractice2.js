const yolo = require('./NodePractice');

console.log(yolo);
console.log(yolo.greetInHindi());
console.log(yolo.greetInKorean());

var url = require('url');
var adrs =
  '<a href="http://localhost:8082/default.htm?year=2019&month=april">http://localhost:8082/default.htm?year=2019&month=april</a>';
var q = url.parse(adrs, true);
console.log(q.host); //returns 'localhost:8082'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2019 and month=april'
var qdata = q.query; //returns an object: { year: 2019, month: 'april' }
console.log(qdata.month); //returns 'april'

var assert = require('assert');
function mul(a, b) {
  return a * b;
}
var result = mul(1, 2);
assert(result === 2, 'one multiplied by two is two');

const axios = require('axios');
const URL = 'https://jsonplaceholder.typicode.com/todos/1';
let fetchResult = axios
  .get(URL)
  .then(({ data }) => {
    console.log('Axios data', data);
  })
  .catch((err) => {
    console.log('err', err);
  });
console.log('fetchresult', fetchResult);

console.log('yolo');
setTimeout(() => console.log('timeout'), 500);
