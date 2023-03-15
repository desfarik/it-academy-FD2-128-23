function simpleMultiplication(number) {
  if (number % 2 === 0) return number * 8;
  else
    return number * 9;
}
console.log(simpleMultiplication(2)); //16
console.log(simpleMultiplication(1)); //9
console.log(simpleMultiplication(8)); //64
console.log(simpleMultiplication(4)); //32
console.log(simpleMultiplication(5)); //45