function max (a, b, c){
   let maxNum;
   if (a > b){ 
      maxNum = a;
   } else {
      maxNum = b;
   }
   return maxNum > c ? maxNum : c ;
}


function max (a, b, c){
   function max2 (a, b) {
      return a> b ? a : b; 
   }
   let maxNum = max2(a,b );
   return max2 (maxNum, c)
}