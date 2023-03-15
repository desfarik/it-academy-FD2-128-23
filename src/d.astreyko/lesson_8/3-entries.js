function entries(object){
  const array = [];
  for (const key in object) {
    const entry = [key, object[key]];
    array.push(entry)
  }
  return array;

}
const user = {
  name: "Ivan",
  age: 20,
  arr : [1,2,3]
}
console.log(entries(user));
console.log(Object.entries(user));
