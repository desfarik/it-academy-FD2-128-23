function minSum(arr) {
  let res = [];
  let sum = 0;
  let sortArr = arr.sort((x, y) => x - y);

  if (arr.length % 2 == 0) {
    for (let index = 0; index < sortArr.length / 2; index++) {
      res.push(sortArr[index] * sortArr[sortArr.length - 1 - index]);
      sum += res[index];
    }
  } else {
    return sum;
  }
  return sum;
}

console.log(minSum([2, 5, 3, 10]));
console.log(minSum([2, 5, 10]));
console.log(minSum([0, 2, 5, 10]));
