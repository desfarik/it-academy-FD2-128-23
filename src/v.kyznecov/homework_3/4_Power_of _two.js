function isPowerOfTwo(n){
    if(n<2) {return false;
    }
     else if(n==2) { return true;
     }
      else if(n>2) { return isPowerOfTwo(n/2);
     }
     }
   console.log( isPowerOfTwo('1024'))
   console.log( isPowerOfTwo('333'))
   console.log( isPowerOfTwo('4096'))
   console.log( isPowerOfTwo('2'))
   console.log( isPowerOfTwo('5'))
   