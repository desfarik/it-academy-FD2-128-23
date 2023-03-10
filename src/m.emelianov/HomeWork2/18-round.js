function round(number) {
    let string = parseInt(`${number}`);
    let numPoint = number - +string;
    return numPoint > 0.5 ? +string + 1 : +string
}
console.log (round(85.40))