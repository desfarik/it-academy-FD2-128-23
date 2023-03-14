function isPowerOfTwo(n) {
  if (Math.log2(n) % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPowerOfTwo(333));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(16));
