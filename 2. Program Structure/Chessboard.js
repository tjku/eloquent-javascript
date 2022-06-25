'use strict';

const size = 8;

for (let line = 1; line <= size; ++line) {
  let result = '';

  for (let i = 1; i <= size; ++i) {
    if (i % 2 == (line % 2 == 0)) {
      result += '#';
    } else {
      result += ' ';
    }
  }

  console.log(result);
}
