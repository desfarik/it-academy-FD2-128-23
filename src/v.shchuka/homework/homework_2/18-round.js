function round(num) {
  const str = `${num}`;
  if (isNaN(num)) {
    return NaN;
  }
  return str.includes(".") ? roundNum(str, num) : +num;
  function roundNum(str, num) {
    const indexDot = str.indexOf(".");
    const floatPart = str.slice(indexDot + 1);
    const integerPart = +str.slice(0, indexDot);
    if (floatPart[0] < 5 || floatPart === "") {
      return integerPart;
    } else {
      return num < 0 ? integerPart - 1 : integerPart + 1;
    }
  }
}
console.log(round(-0.6));
