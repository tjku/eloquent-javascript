'use strict';

function countChar(str, character) {
  let size = str.length;
  let result = 0;

  for (let i = 0; i < size; ++i) {
    if (str[i] === character) ++result;
  }

  return result;
}

function countBs(str) {
  return countChar(str, 'B');
}
