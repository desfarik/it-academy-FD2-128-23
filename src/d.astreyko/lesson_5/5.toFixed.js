function toFixed(num, fixedSymbols=`${num}`.length) {
  const intPart = parseInt(num);
  const pointIndex = 2; // 0.12
  const floatPart = `${num - intPart}`.slice(pointIndex, pointIndex + fixedSymbols);
  //let floatPart = `${num - intPart}`.substr(2, fixedSymbols);
  return intPart + '.' + floatPart;
}

function toFixed2(num, fixedSymbols =`${num}`.length) {
  const numStr = `${num}`;
  const pointIndex = numStr.indexOf('.');

  return numStr.slice(0, pointIndex + fixedSymbols + 1);
}
console.log(toFixed(2.23234, 2))
console.log(toFixed(21.23234, 2))
console.log(toFixed(603.34, 1))
