const deepEqual = (obj1, obj2) => {
  if (obj1 !== null && obj2 !== null && typeof obj1 === "object" && typeof obj2 === "object") {
    let result = true;
    let keys = Object.keys(obj1).concat(Object.keys(obj2))

    for (let key of keys) {
      result = deepEqual(obj1[key], obj2[key])
      if (result === false) break;
    }
    return result;
  }

  return obj1 === obj2;
};
