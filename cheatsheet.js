'use strict';

/***************************************
 *** 1. Values, Types, and Operators ***
 ***************************************/

// JavaScript uses only one numeric type: 64-bit float numbers.
// So, 1.0 and 1 are the same number, they have the same value.

// Modulo: "X % Y" is the remainder of dividing X by Y.
314 % 100; // => 14

'1.0' == 1; // JavaScript uses automatic type conversion before comparing two sides.
'1' === 1; // Safer version, do not convert types. Use this in most cases.

Infinity; -Infinity; NaN; // Special numbers.

// NaN is the only one value in JavaScript that is not equal to itself.
NaN != NaN; // => true

// JavaScript uses Unicode standard (16-bit) for string type.

// Backtick-quoted strings can use string interpolation.
`My number: ${2 + 3}`; // "`" character in Polish is called "grawis".

console.log(typeof 4.5); // => number
console.log(typeof "x"); // => string

// OR casts left value to boolean type and if equal to true, returns it.
// Otherwise, it casts right value and returns it.
null || "user"; // => "user"
"one" || "two"; // => "one"

// AND casts left value to boolean type and if equal to false, returns it.
// Otherwise, it casts right value and returns it.
null && "user"; // => null
"one" && "two"; // => "two"

// Ternary operator.
'value' ? 'return when value is true' : 'return when value is false';

undefined; null; // Empty values.

undefined == null; // => true
null == 0; // => false
false == 0; // => true

/****************************
 *** 2. Program Structure ***
 ****************************/

// Expression is a fragment of code that produces a value.

let myNumber = 123; // Binding.

var oldWay; // Create a global variable (if defined outside a function) or a variable that is visible
            // inside all the scope of the function (even before its definition).
            // Do not use! Use `let` or `const` instead.

globalVariable; // Even defined inside a function, its scope is global.

if (true)
  console.log('we can omit braces when we have only single statement');

while (true) {
  console.log('print once');
  break;
}

do {
  console.log('print once');
while (false);

for (let i = 0; i < 3; ++i) {
  console.log(i);
}

let numbers = [1, 2, 3];

for (let number of numbers) { // New way of iterating though array.
  console.log(number);
}

switch (123 % 2) {
  case 0:
    console.log('value is even');
    break; // Without `break` it would go to the next `case`.
  case '1:
    console.log('value is odd');
    break;
  default:
    console.log('something went wrong');
}

/********************
 *** 3. Functions ***
 ********************/

// Functions are visible in whole scope, even before their definition.

// Function definition.
const functionName = function(optionalArgument = 1) {
  optionalArgument + 1;

  // Lack of `return` gives value `undefined`.
}; // Semicolon is required.

// Function declaration.
function functionName2() {
  return; // `return` without an expression also returns `undefined`.
} // Semicolon is not required.

// Arrow function.
const functionName3 = (x) => { return x * x; };

functionName3(); // Omitted params are filled with `undefined` value.

// When there is only one parameter name, you can omit the parentheses around the parameter list.
// If the body is a single expression, rather than a block in braces, that expression will be returned from the function.
const functionName4 = x => x * x;

// Closure (pl. domknięcie).
function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2);
twice(5); // => 10

/**********************************************
 *** 4. Data Structures: Objects and Arrays ***
 **********************************************/

let listOfNumbers = [1, 1, 2, 3, 5, 8];

listOfNumbers.length == listOfNumbers["length"]; // Accessing a property could be done by dot or square brackets.

// Properties that contain functions are generally called methods.

let myObject = {
  propertyOne: "value of propertyOne",
  "property Two": "value or property Two"
};

myObject.propertyThree; // => undefined

delete myObject.propertyOne; // Removed property from the object.

"propertyOne" in myObject; // => false

Object.keys(myObject); // => ["property Two"]

// `Object.assign` copies all properties from one object into another.
Object.assign(myObject, { "property Two": "overwritten value", newProperty: "value" });

// Numbers, string, and booleans are immutable.
// Objects and arrays are mutable (you can change their properties).

const score = { visitors: 0, home: 0 };
score.visitors = 1; // This is okay.
score = { visitors: 1, home: 0 }; // This isn't allowed.

let name = "value";
{ name }; // A shorthand for `{ name: name }`.

// Rest parameters.
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}

max(5, 1, 7); // => 7

let numbers = [5, 1, 7];
max(9, ...numbers, 8); // => 9

// Destructuring.
let [x, y, z] = [1, 2, 3, 4, 5]; // x => 1, y => 2, z => 3
let { name } = { name: "John", age: 33 }; // name => "John"
