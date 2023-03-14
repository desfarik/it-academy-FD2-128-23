function keys(object){
  const array = [];
  for (const key in object) {
    array.push(key)
  }
  return array;

}
const user = {
  name: "Ivan",
  age: 20,
  arr : [1,2,3]
}
console.log(keys(user));
console.log(Object.keys(user));

