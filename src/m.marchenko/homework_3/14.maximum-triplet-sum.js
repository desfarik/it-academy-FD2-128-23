function maxTriSum(numbers){
    let array = [...new Set(numbers.sort((a, b) => b - a))]
    return array[0] + array[1] + array[2]
    
}

console.log(maxTriSum([2,9,13,10,5,2,9,5]));
console.log(maxTriSum([15,15,15,2,1]));