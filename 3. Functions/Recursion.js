'use strict';

function isEven(x) {
  if (x < 0) return isEven(-x);
  if (x == 0) return true;
  if (x == 1) return false;

  return isEven(x - 2);
}
