function isObject(object) {
  return typeof object === 'object';
}

function clone(target) {
  //return Object.assign({}, object)
  //return { ...object };
  let newObject = {};
  for (const key in target) {
    if (isObject(target[key])) {
      newObject[key] = clone(target[key]);
    } else {
      newObject[key] = target[key];
    }
  }
  return newObject;
}

let user = {
  name: 'ivan',
  address: {
    city: 'minsk',
    zip: 210222,
  },
  age: 10,
};
let cloned = clone(user);
cloned.age = 20;
cloned.address.city = 'brest';
console.log(cloned, user);
