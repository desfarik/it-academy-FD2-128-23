function getDecimal(n) {
    let arr;
    let result;
    n = String(n);
    arr = n.split('.');
    if (arr.length === 1) {
        return 0;
    } else {
        result = '0.' + arr[1];
    }
    return result;
}
console.log(getDecimal(1))
console.log(getDecimal(-8.45646))
console.log(getDecimal(8.325))
