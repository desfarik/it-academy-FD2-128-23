function rentalCarCost(d) {
  let carCost = d * 40;
  if (d >= 7) return carCost - 50;
  else if (d >= 3) return carCost - 20;
  else {
    return carCost;
  }
}
console.log(rentalCarCost(4));
