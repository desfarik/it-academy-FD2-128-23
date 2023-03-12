function add(num1, num2) {
    let sumString = '';
    while (num1 || num2) {
      sumString = (num1 % 10) + (num2 % 10) + sumString;
      num1 = Math.floor(num1 / 10);
      num2 = Math.floor(num2 / 10);
    }
    return +sumString;
}