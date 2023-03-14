function squareSum(numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    let squre = numbers[index] ** 2;
    sum += squre;
  }
  return sum;
}

console.log(squareSum([2, 4, 3]));
