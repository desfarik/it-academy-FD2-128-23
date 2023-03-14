function squareSum(numbers){
    if (numbers.length === 0){
        return 0;
    }
    const array = [];
    for (let i = 0; i < numbers.length; i++){
        let sqr = Math.pow(numbers[i],2);
        array.push(sqr) 
    }
    return array.reduce((a, b) => a + b)
}

console.log(squareSum([0, 3, 4, 5]))
console.log(squareSum([1,2]))
console.log(squareSum([]))

