function rentalCarCost(d) {
  let cost = d * 40;
  if (d < 1) {
    return 0;
  } else if (d < 3) {
    return cost;
  } else if (d < 7) {
    return cost - 20;
  } else {
    return cost - 50;
  }
}
console.log(rentalCarCost(2));
