function has(object, key) {
  // return key in object
  // return object[key] !== undefined;
  return Object.keys(object).includes(key)
}

console.log(has({name: 2,}, 'name'));
console.log(has({age: 2,}, 'name'));
console.log(has({name: undefined,}, 'name'));
