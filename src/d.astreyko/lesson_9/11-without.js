function without(object, keys) {
let newObject = {}
  for (const key in object) {
   if (!keys.includes(key)) {
     newObject[key] = object[key]
   }
  }
  return newObject
}

console.log(without({name:'name', age: 12}, []));
console.log(without({name:'name', age: 12}, ['name']));
