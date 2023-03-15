function isPowerOfTwo(n) {
  if (n === 1) {
    return true;
  }
  
  let num = 0;
  for (let i = 1; num < n; i++) {
    num = Math.pow(2, i);
    if (num === n) {
      return true;
    }
  }
  return false;
}

console.log(isPowerOfTwo(4096));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(0));
