function getDecimal(n) {
    const intPart = parseInt(n);
    const floatPart = n - intPart;
    return Math.abs(floatPart);
}

console.log(getDecimal(-2.34));