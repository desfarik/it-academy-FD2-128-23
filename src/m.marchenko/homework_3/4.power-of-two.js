function isPowerOfTwo(n) {
  let check = 0
  if (n === 0) {
    return false
  }
  if (n === 1 || n === 2) {
    return true
  }
  for (let i = 2; i < n; i *= 2) {
    check = i * 2;
  }
  return n === check;
}

console.log(isPowerOfTwo(2048))
console.log(isPowerOfTwo(666))
console.log(isPowerOfTwo(0))