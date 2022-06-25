const arrayToList = (array) => {
  if (array.length === 0) {
    return null;
  }

  return { value: array[0], rest: arrayToList(array.slice(1)) }
};

const listToArray = (list) => {
  if (list === null) {
    return [];
  }

  return [list.value, ...listToArray(list.rest)]
};

const prepend = (element, list) => {
  return { value: element, rest: list }
};

const nth = (list, number) => {
  if (list === null) {
    return;
  }

  if (number === 0) {
    return list.value;
  }

  return nth(list.rest, number - 1);
};
