const loop = (initial_value, test, update, body) => {
  for (let n = initial_value; test(n); n = update(n)) {
    body(n);
  }
};
