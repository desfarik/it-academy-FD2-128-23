function filterEven(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(filterEven([1, 4, 8, 9]));
