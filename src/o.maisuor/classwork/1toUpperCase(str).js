function toUpperCase(str){
   let result = '';
   for (let i = 0; i < str.length; i++){
      const symbol = str[i];
      const code = symbol.codePointAt(0)
      if (code < 91){
         result += symbol;
      } else {
         // for (let i = 0; i < 150; i++){
         //    console.log(i, string.fromCodePoint(i))
         // }
         result += stringFromPoint(code -32)
      }
   }
   return result
}
console.log(toUpperCase(asfsafdsf));