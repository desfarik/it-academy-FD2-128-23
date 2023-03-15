function maxTriSum(numbers, n = 3) {

  numbers = [...new Set(numbers)];
  /*const max1 = Math.max(...numbers);
numbers.splice(numbers.indexOf(max1), 1);

const max2 = Math.max(...numbers);
numbers.splice(numbers.indexOf(max2), 1);

const max3 = Math.max(...numbers);
numbers.splice(numbers.indexOf(max3), 1);*/

  numbers.sort((a, b) => b - a);
  return numbers
    .slice(-n)
    .reduce((sum, n) => sum + n, 0);
}


maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]);
