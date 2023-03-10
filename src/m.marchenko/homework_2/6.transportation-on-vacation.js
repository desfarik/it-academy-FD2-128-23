function rentalCarCost(d) {
    if (d < 3) {
        return d*40;
    }
    if (3 <= d && d<7) {
        return d*40-20;
    }
    return d*40-50;
  }

console.log(rentalCarCost(2));
console.log(rentalCarCost(6));
console.log(rentalCarCost(30));