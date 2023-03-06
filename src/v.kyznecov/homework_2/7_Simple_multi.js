function simpleMultiplication(number) {
  let result = ""
  if (number % 2 === 0) {
    result = number * 8
  } else {
    result = number * 9
  }
  return result
}
console.log(simpleMultiplication(2))
console.log(simpleMultiplication(1))
