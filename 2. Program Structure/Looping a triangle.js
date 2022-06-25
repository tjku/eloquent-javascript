'use strict';

const x = '#';

for (let i = 1; i <= 7; ++i) {
  let result = '';

  for (let j = 0; j < i; ++j) {
    result += x;
  }

  console.log(result);
}
