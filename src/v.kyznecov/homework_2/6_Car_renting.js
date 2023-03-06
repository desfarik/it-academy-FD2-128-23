function rentalCarCost(d) {
  let sum = ""
  let price = 40
  if (d < 3) {
    sum = price * d
  } else if (d >= 3 && d < 7) {
    sum = price * d - 20
  } else if (d >= 7) {
    sum = price * d - 50
  } else {
  }
  return sum
}
console.log(rentalCarCost(5))
console.log(rentalCarCost(1))
console.log(rentalCarCost(8))
