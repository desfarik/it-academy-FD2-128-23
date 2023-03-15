function getDecimal(n) {
  let floatPart = n - Math.trunc(n);
  if (n < 0) {
    return -floatPart;
  } else {
    return floatPart;
  }
}
console.log(getDecimal(1.23));
