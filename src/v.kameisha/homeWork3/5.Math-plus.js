function add(num1, num2) {
    let result = '';
    while (num1 > 0 || num2 > 0) {
        result = num1 % 10 + num2 % 10 + result;
        num1 = Math.floor(num1 / 10);
        num2 = Math.floor(num2 / 10);
    }
  return +result;
}
console.log(add(2,11));
console.log(add(5,7));