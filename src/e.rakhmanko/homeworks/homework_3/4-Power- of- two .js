function isPowerOfTwo(n) {
  if (n == 1) return true;
  if (n < 1) return false;
  return isPowerOfTwo(n / 2);
}
console.log(isPowerOfTwo(1024));
console.log(isPowerOfTwo(4096));
console.log(isPowerOfTwo(333));