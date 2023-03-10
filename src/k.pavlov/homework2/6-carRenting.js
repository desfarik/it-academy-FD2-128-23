function rentalCarCost(d) {
    if (d >= 7) {
        return 40*d -50;
    }

    else if (d >= 3 && d <7) {
        return 40*d - 20;
    }

    return 40*d;
}

console.log(rentalCarCost(3));