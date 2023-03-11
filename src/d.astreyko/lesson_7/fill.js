const array = new Array(10).fill(0)
console.log(array)

function fill(size, value){
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(value)
  }
  return array;
}
console.log(fill(5,5))
