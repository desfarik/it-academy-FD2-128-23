function squareSum(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum = numbers[i] ** 2 + sum
    }
    return sum
}

console.log(squareSum([1, 2]));         //5
console.log(squareSum([0, 3, 4, 5]));   //50
console.log(squareSum([]));             //0