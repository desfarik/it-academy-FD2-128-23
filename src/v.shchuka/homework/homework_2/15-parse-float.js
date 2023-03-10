function parseFloat(str) {
  const digits = "0123456789";
  const dot = ".";
  let result = "";
  const indexSymb = str.indexOf(dot);
  const leftSubstr = str.slice(0, indexSymb);
  const rightSubstr = str.slice(indexSymb + 1);
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
