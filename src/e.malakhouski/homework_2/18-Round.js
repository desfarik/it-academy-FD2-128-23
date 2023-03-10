function round(num) {
  if (Number.isInteger(num)) {
    return num;
  }
  const intPart = parseInt(num);
  const floatPart = num - intPart;
  return (floatPart < 0.5) ? intPart : (intPart + 1);
}

console.log(round(18));
console.log(round(18.353453));
console.log(round(12.49));
console.log(round(12.5));
console.log(round(12.51));
console.log(round(22.83213));
