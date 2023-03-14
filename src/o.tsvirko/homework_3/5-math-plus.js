function add(num1, num2) {
    let sum = '';
    while (num1 + num2 > 0) {
        sum = num1 % 10 + num2 % 10 + sum;
        num1 = Math.floor(num1 / 10);
        num2 = Math.floor(num2 / 10);
    }
    return +sum
}
console.log(add(100, 11))
console.log(add(1234, 567))