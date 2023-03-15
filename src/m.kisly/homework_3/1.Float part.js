function getDecimal(n) {
  return Math.abs(n - Math.trunc(n));
}

console.log(getDecimal(10));    //0
console.log(getDecimal(-1.2));  //0.2
console.log(getDecimal(4.5));   //0.5