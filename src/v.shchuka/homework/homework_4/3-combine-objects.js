function combine(...arr) {
  let object = {};
  for (const obj of arr) {
    for (const key in obj) {
      object[key] = key in object ? object[key] + obj[key] : obj[key];
    }
  }
  return object;
}
const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };
console.log(combine(objA, objC));
