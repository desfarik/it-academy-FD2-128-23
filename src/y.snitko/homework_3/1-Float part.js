function getDecimal(n) {
  if (n !== Infinity && n !== NaN) {
    return Math.abs(n - Math.trunc(n));
  }
}

console.log(getDecimal(2.50004545));
console.log(getDecimal(6.4));
