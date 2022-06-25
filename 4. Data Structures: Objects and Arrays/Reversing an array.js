const reverseArray = (array) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result[i] = array[array.length - i - 1];
  }

  return result;
};

const reverseArrayInPlace = (array) => {
  let temp = 0;
  let len = array.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    temp = array[i];
    array[i] = array[len - i - 1];
    array[len - i - 1] = temp;
  }

  return array;
};
