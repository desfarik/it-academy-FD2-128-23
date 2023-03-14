function mathPlus(num1, num2) {
  let strLength1 = `${num1}`.length;
  let strLength2 = `${num2}`.length;
  let fillStr1 = [];
  let fillStr2 = [];
  let result = [];

  if (strLength1 > strLength2) {
    fillStr1 = `${num1}`.split('');
    fillStr2 = `${num2}`.padStart(strLength1, '0').split('');
  } else if (strLength1 < strLength2) {
    fillStr1 = `${num1}`.padStart(strLength2, '0').split('');
    fillStr2 = `${num2}`.split('');
  } else {
    fillStr1 = `${num1}`.split('');
    fillStr2 = `${num2}`.split('');
  }

  for (let index = 0; index < fillStr1.length; index++) {
    result.push(parseInt(fillStr1[index]) + parseInt(fillStr2[index]));
  }
  return parseInt(result.join(''));
}

console.log(mathPlus(1, 0));
console.log(mathPlus(0, 0));
console.log(mathPlus(101, 1010));
console.log(mathPlus(115, 1990));
