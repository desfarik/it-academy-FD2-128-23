function maxTriSum(numbers){
    let sortedNumbers = numbers.sort((a, b) => b - a);
    let uniqueNumbers = [...new Set(sortedNumbers)];
    return uniqueNumbers[0] + uniqueNumbers[1] + uniqueNumbers[2];
}
console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4]))