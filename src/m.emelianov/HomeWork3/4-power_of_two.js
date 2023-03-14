function isPowerOfTwo(n){
    let result = 0;
    for (let i = 0; result < n; i++){
        result = 2**i;
        if (result === n){
            return true;
        }
      }
      return false
    }
 console.log(isPowerOfTwo(4096))
 console.log(isPowerOfTwo(1))
 console.log(isPowerOfTwo(567))
 console.log(isPowerOfTwo(1024))
 console.log(isPowerOfTwo(0))
 