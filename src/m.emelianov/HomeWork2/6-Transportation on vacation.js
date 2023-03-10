function rentalCarCost(d) {
    let total = d * 40;
    if (d >= 7){
      total = d * 40 - 50;
    } else if (d >= 3) {
      total = d * 40 - 20;
    }
    return total;
  } 

  console.log(rentalCarCost(10))