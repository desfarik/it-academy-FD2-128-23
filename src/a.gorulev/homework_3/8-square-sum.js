function squareSum(numbers){
  let temp = [];
  // квадрат каждого
  temp = numbers.map(item => item*item);
  // сумма квадратов
  return temp.reduce((sum, current) => sum + current, 0);
}

squareSum([17,13,-10,11,17,4]);