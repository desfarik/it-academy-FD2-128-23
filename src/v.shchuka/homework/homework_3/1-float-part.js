function getDecimal(n) {
  const floatPart = n - Math.trunc(n);
  return n > 0 ? floatPart : -floatPart;
}
console.log(getDecimal(-4.5));
