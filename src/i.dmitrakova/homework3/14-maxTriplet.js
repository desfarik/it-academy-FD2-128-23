function maxTriSum(numbers, n = 3) {

   
    const max1 = Math.max(...numbers);
  numbers.splice(numbers.indexOf(max1), 1);
  const max2 = Math.max(...numbers);
  numbers.splice(numbers.indexOf(max2), 1);
  const max3 = Math.max(...numbers);
  numbers.splice(numbers.indexOf(max3), 1);
  return max1 + max2 + max3
  }
  
  
  console.log(maxTriSum([2, 1, 8, 0, 6,]));