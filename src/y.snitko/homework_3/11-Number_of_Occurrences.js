function numberOfOccurrences(arr, element) {
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    let elem = arr[index];
    if (elem === element) {
      result.push(index);
    }
  }
  return result.length;
}
console.log(numberOfOccurrences([0, 1, 2, 2, 3, 6, 9], 2));
console.log(numberOfOccurrences([0, 9, 2, 9, 9, 6, 9], 9));
console.log(numberOfOccurrences([0, 1, 2, 2, 3, 6, 9], 4));
