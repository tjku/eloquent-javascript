const range = (start, end, step = 1) => {
  let result = [];

  while ((step > 0 && start <= end) || (step < 0 && start >= end)) {
    result.push(start);
    start += step;
  }

  return result;
}

const sum = (numbers) => {
  let result = 0;

  for (let number of numbers) {
    result += number;
  }

  return result;
}
