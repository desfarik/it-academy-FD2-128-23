function maxTriSum(numbers) {
  let result = [];
  let sum = 0;

  function delRepeat(numbers) {
    let tempArr = [];
    for (let index = 0; index < numbers.length; index++) {
      if (!tempArr.includes(numbers[index])) {
        tempArr.push(numbers[index]);
      }
    }
    return tempArr;
  }
  result = delRepeat(numbers)
    .sort((x, y) => y - x)
    .slice(0, 3);
  for (let index = 0; index < result.length; index++) {
    sum += result[index];
  }
  return sum;
}

console.log(maxTriSum([3, 2, 6, 8, 2, 3]));
console.log(maxTriSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29]));
