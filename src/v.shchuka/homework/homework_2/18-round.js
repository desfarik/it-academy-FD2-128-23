function round(num) {
  const str = `${num}`;
  return str.includes(".") ? roundNum(str, num) : +num;
  function roundNum(str, num) {
    const indexDot = str.indexOf(".");
    const floatPart = str.slice(indexDot + 1);
    const integerPart = +str.slice(0, indexDot);
    if (floatPart != +floatPart) {
      return NaN;
    } else if (floatPart[0] < 5) {
      return integerPart;
    } else {
      return num < 0 ? integerPart - 1 : integerPart + 1;
    }
  }
}
console.log(round(-0.6));
