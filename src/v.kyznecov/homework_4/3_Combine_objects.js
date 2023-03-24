function combine() {
let object = {}
for (const key1 in arguments) {
for (const key2 in arguments[key1]) {
if (object.hasOwnProperty(key2)) {
object[key2] = object[key2] + arguments[key1][key2] 
} else {
object[key2] = arguments[key1][key2]
 } } }
  return object
}
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }

console.log(combine(objA, objB));