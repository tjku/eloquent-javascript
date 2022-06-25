const everyByLoop = (array, test) => {
  for (element of array) {
    if (!test(element)) {
      return false
    }
  }

  return true;
};

const everyByReduce = (array, test) => {
  return array.reduce((a, b) => a && test(b), true);
};

const everyBySome = (array, test) => {
  return !array.some((n) => !test(n));
};
