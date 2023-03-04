function simpleMultiplication(number) {
    if (number%2===0) {
        return number*8;
    }
    return number*9;
}

console.log(simpleMultiplication(3));
console.log(simpleMultiplication(2));