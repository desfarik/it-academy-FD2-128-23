function minSum(arr) {
    let array = [...arr].sort((a, b) => a - b);
    let sum = 0
    while (array.length) sum += array.pop() * array.shift();
    return sum;
}

console.log(minSum([5, 4, 2, 3]));