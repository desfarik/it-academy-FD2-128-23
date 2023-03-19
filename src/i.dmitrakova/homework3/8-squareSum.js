function squareSum(array){
    sum = 0;
    for(let i = 0; i < array.length; i++){
        if(array.length > 0){
        sum += Math.pow(array[i], 2)}
    }
    return sum
}
console.log(squareSum([5, 3, 4]))