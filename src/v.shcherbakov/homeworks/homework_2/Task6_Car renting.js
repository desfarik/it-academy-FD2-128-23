function rentalCarCost(d) {
    const costDay = 40;
    let costTotal = 0;
    const discount7 = 50;
    const discount3 = 20;
    if (d >= 7) {
        costTotal = (d * costDay) - discount7;
    }
    else if (d >= 3) {
        costTotal = (d * costDay) - discount3;
    }
    else if (d < 3 ) {
        costTotal = d * costDay;
    }
    // return costTotal;

    console.log(costTotal);
}
rentalCarCost(7)
