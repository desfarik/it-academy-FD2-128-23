function getDecimal(n) {
    return Math.abs(n) - Math.floor(Math.abs(n))
}

console.log(getDecimal(10))
console.log(getDecimal(-1.2))
console.log(getDecimal(4.6))
