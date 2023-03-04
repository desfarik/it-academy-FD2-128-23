function toFixed (num, fixedSymbols){
   let inPart = parseInt(num);
// let floatPartNum = num - intPart;
let floatPartNum = `${num - intPart}`.slice(2, 2 + fixedSymbols);
   return intPart + '.' + floatPartNum;
}



