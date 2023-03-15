function round(num) {
  let string = num.toString();
  let array = string.split('.');
  let firstNumber  = +array[0]; 
  let secondNumber = +array[1];
  // +1 if >= .5, -1 if negative >= .5
  let rounded = num > 0 ?  
  (secondNumber < 5 ? firstNumber : firstNumber + 1) : 
  (secondNumber < 5 || firstNumber == 0 ? firstNumber : firstNumber - 1);
  console.log(rounded);
}

round(12434.56666);
round (2.9);
round(0);
round(-2.9);
