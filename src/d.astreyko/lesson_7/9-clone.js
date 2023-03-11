function clone(array) {
  let clone = []
  for (let i = 0; i<array.length;i++){
    clone[i] = array[i]
  }
  // return array.slice()
  // return clone;
  return [...array]
}

const array = [1, 2, 3];
let clonedArray = clone(array);

array.push(4);
console.log(array);
console.log(clonedArray);
