function getDecimal(n){
   let result = '';
   if (n % 1 === 0) {
      return 0;
   } else {
      n = n % 1;
      if (n < 0) {
         n = n.toString().slice(1);
         return Number(n);
      } else {
         return n;
      }
   }
}

console.log(getDecimal(8.9))


function getDecimal(n){
   return Math.abs(n%1);
}
