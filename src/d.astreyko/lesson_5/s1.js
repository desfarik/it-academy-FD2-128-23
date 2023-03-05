function toUpperCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const symbol = str[i];
    const code = symbol.codePointAt(0);
    if (code <= 120 && code >= 97) {
      result += String.fromCodePoint(code - 32)
    }
    else {
      result += symbol;
    }
  }
  return result;
}

console.log(toUpperCase('AsssAdF1_>'))
