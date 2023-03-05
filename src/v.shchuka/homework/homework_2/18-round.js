function round(num) {
  const str = `${num}`;
  if (str.includes(".")) {
    return roundNum(str, num);
  } else {
    return num;
  }
  function roundNum(str, num) {
    const indexDot = str.indexOf(".");
    const floatPart = str.substr(indexDot + 1, 1);
    const integerPart = +str.slice(0, indexDot);
    if (floatPart < 5) {
      return integerPart;
    } else {
      return num < 0 ? integerPart - 1 : integerPart + 1;
    }
  }
}
console.log(round(-0.6));
