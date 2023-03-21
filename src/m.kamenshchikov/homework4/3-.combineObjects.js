function combine(...arr) {
  let result = {};
  for (const obj of arr) {
    for (const key in obj) {
      result[key] = key in result ? result[key] + obj[key] : obj[key];
    }
  }
  return result;
}
const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
console.log(combine(objA, objB));
