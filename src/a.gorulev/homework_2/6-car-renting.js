function rentalCarCost(d) {
  let c = 40 * d;
  if (d >= 7) {
     return c - 50;
  } else if (d >= 3) {
    return c - 20;
  }
  return c;
}