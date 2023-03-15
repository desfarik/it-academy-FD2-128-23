function toLower(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const symbol = str[i];
    const code = symbol.codePointAt(0);
    if (code >= 65 && code <= 90) {
      result += String.fromCodePoint(code + 32)
    }
    else {
      result += symbol;
    }
  }
  return result;
}


console.log(toLower('AsssAdF1_>'))
