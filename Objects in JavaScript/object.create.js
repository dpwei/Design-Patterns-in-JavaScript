/*
 Three ways to create object
 */
let obj = {};

let createObj = Object.create(Object.prototype); // this way can be used to implement inheritance

let newObj = new Object();

/*
 Reading and Writing Attributes
 */

// dot notation
obj.name = 'new Value';
console.log(obj.name);

// square bracket notation
obj['name'] = 'new Value';
console.log(obj['name']);

// square bracket notation with variable
let key = 'name';
obj[key] = 'new Value';
console.log(obj[key]);