function minSum(arr) {
    const sort = arr.sort((a, b) => a - b)
    let sum = 0;
    for (let i = 0; i < arr.length / 2; i++) {
        sum += sort[i] * sort[sort.length - 1 - i]
    }
    return sum
}

console.log(minSum([5, 4, 2, 3]), 22);
console.log(minSum([12, 6, 10, 26, 3, 24]), 342);
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]), 74);