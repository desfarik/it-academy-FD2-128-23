function filterBy(object, filterFn) {
  let newObject = {};
  for (let key in object) {
    const needCopy = filterFn(key, object[key])
    if (needCopy) {
      newObject[key] = object[key];
    }
  }
  return newObject;
}
let user ={
  name:'ivan',
  age: 20,
}
console.log(filterBy(user, function(key, value){
  return typeof (value) === 'string';

}))
