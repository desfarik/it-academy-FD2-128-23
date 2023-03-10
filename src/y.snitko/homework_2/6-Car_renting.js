function rentalCarCost(d) {
    let rentalCost = 40;
    
    if ( d >= 7) {
        rentalCost = rentalCost * d - 50;
    }

    else if (3 <= d && d < 7 ) {
        rentalCost = rentalCost * d - 20;
    }

    else {
        rentalCost = rentalCost * d;
    }
    
    return(rentalCost);
}

console.log(rentalCarCost(10));
console.log(rentalCarCost(5));
console.log(rentalCarCost(2));