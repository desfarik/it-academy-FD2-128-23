function squareSum(numbers){
    let total=0;
    numbers.map(el => total += el*el)
    return total;
  }