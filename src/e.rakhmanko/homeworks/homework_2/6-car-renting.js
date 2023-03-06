function baseCost(days, rate) {
    return days * rate;
  }
  
  function discountRate(days) {
    if ( days >= 7 ) {
      return 50;
    }
    else if ( days >= 3 ) {
      return 20;
    }
    else {
      return 0;
    }
  }
  
  function rentalCost(days) {
    return baseCost(days, 40) - discountRate(days);
  }
console.log(rentalCost(20));
console.log(rentalCost(10));
console.log(rentalCost(5));