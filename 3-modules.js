// CommonJS, every file is module (by defalt)
// Modules - Encapsulated Code (only share minimum)

// const { john, peter } = require('./4-names');
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

require('./7-mind-grenade');

sayHi('susan');
// sayHi(peter);
sayHi(names.peter);
// sayHi(john);
sayHi(names.john);