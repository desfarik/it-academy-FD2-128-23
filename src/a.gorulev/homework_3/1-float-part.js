function getDecimal(n){
  let string = n.toString();
  let array = string.split('.');
  array[0] = 0;
  return +array.join('.');
}

getDecimal(-3.56);