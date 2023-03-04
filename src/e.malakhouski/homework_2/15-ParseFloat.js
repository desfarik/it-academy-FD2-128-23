function newParseFloat(str) {
  const digits = "0123456789.";
  let resultNum = "";
  for (let i = 0; i < str.length; i++) {
    let symb = str[i];
    if (digits.includes(symb)) {
      resultNum += symb;
    } else {
      break;
    }
  }
  return resultNum === "" ? NaN : +resultNum;
}


console.log(newParseFloat("234 jhh"));
console.log(newParseFloat("234.34 jhh"));
console.log(newParseFloat("fgh234 jhh"));
console.log(newParseFloat("2.534242sfwec"));
console.log(newParseFloat(".12123dasda"));
