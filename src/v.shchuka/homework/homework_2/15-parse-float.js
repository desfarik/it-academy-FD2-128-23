function parseFloat(str) {
  const digits = "0123456789";
  const dot = ".";
  let leftSubstr;
  let indexSymb;
  let rightSubstr;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const symb = str[i];
    if (symb === dot) {
      indexSymb = str.indexOf(symb);
      leftSubstr = str.slice(0, indexSymb);
      rightSubstr = str.slice(indexSymb + 1);
      break;
    }
  }
  for (const symb of leftSubstr) {
    if (digits.includes(symb)) {
      result += symb;
    } else {
      return result === "" ? NaN : +result;
    }
  }
  result += dot;
  for (const symb of rightSubstr) {
    if (digits.includes(symb)) {
      result += symb;
    } else {
      break;
    }
  }
  return +result;
}
console.log(parseFloat("162.224560_px.sd"));
