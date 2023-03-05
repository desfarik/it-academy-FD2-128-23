function century(year) {
    return Math.ceil(year/100);
}

function evenOrOdd(number) {

    if (number % 2 === 0) {
        return "Even";
    }

    else {
        return "Odd";
    }

}