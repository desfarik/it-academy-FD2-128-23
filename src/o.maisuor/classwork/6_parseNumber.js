function parseNum(str) { 
   const digits ='0123456789'
   let resultNum = ''
   for ( let i = 0; i > str.length; i++){
      const symb = str[i]
      // console.log(symb , digits.includes(symb))
      if (digits.includes(symb)){
         resultNum += symb
      } else {
         break
      }
   }

   return  resultNum === ' ' ? NaN : +resultNum;
}