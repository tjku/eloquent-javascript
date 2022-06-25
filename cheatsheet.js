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
