function sumOfMinimums(arr) {
  let minElements = [];
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    let temp = arr[index].sort((x, y) => x - y);
    minElements.push(temp[0]);
  }
  for (let index = 0; index < minElements.length; index++) {
    sum += minElements[index];
  }
  return sum;
}

console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 1],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
);
