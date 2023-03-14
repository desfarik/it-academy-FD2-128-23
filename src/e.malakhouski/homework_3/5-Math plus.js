function add(num1, num2) {
  num1 = `${num1}`.split("");
  num2 = `${num2}`.split("");
  let array = [];
  while (num1.length !== num2.length) {
    if (num1.length > num2.length) {
      num2.unshift("");
    } else if (num2.length > num1.length) {
      num1.unshift("");
    }
  }
  
  for (let i = num1.length - 1; i >= 0; i--) {
    array.unshift(+num1[i] + +num2[i]);
  }
  return +array.join("");
}

console.log(add(23788, 121));
