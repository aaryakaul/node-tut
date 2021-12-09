const { items, singlePerson } = require('./exports');

console.log(items, singlePerson);

require('./mind-grenade'); // when we require a module, nodejs wraps the required module
// inside a wrapper function which gets executed when required

// console.log(module);
