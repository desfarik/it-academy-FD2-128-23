function getDecimal(n){
    if(n !== NaN && n !== Infinity){
      return Math.abs( n - Math.trunc(n));
    }
  }
  console.log(getDecimal(0.34));
  console.log(getDecimal(2.583));
  console.log(getDecimal(-1.53));