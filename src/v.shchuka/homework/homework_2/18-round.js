function round(num) {
  const str = `${num}`;
  if (str.includes(".")) {
    return roundNum(str);
  } else {
    return num;
  }
  function roundNum(str) {
    const indexDot = str.indexOf(".");
    let floatPart = str.slice(indexDot + 1);
    let integerPart = +str.slice(0, indexDot);
    if (floatPart[0] < 5) {
      return integerPart;
    } else {
      return roundFloatMoreFive(integerPart, num);
    }
  }
  function roundFloatMoreFive(integerPart, num) {
    if (integerPart === 0) {
      return num < 0 ? -1 : 1;
    } else if (integerPart < 0) {
      return integerPart - 1;
    } else {
      return integerPart + 1;
    }
  }
}
console.log(round(-0.6));
