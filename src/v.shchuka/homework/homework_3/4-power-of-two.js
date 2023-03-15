function isPowerOfTwo(x) {
  let n = 0;
  let num = x;
  if (x === 1) {
    return true;
  }
  while (num > 1) {
    n++;
    num /= 2;
  }
  return x ** (1 / n) === 2;
}
console.log(isPowerOfTwo(32));
