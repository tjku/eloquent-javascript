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
