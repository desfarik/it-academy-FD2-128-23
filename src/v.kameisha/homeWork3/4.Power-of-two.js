function isPowerOfTwo(n){
    for (i = 1; i <= n; i*=2){
      if (i === n) {
        return true;
      }
    }
    return false;
  }
  console.log(isPowerOfTwo(2));
  console.log(isPowerOfTwo(8));
  console.log(isPowerOfTwo(5));