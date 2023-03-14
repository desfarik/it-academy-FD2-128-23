function getDecimal(n){
  let integer = parseInt(n);
  let decimal = Math.abs(n - integer);
  return decimal
  
}
console.log(getDecimal(-1.7))
console.log(getDecimal(24.5))


