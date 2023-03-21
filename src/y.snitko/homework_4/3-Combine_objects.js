function combine(...objects) {
  let result = {};
  for (let object of objects) {
    for (let key in object) {
      key in result
        ? (result[key] += object[key])
        : (result[key] = object[key]);
    }
  }
  return result;
}

console.log(
  combine({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }, { a: 12, b: 2, c: 3 })
);
