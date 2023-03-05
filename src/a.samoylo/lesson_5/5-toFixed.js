function toFixed(num, e) {
    return `${num}`.slice(0, e ? (`${num}`.indexOf('.')+e+1) : `${num}`.indexOf('.'))
}
console.log(toFixed(1234.567,2))