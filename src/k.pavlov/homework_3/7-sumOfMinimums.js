function sumOfMinimums(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
       sum = sum + Math.min(...arr[i])
    }
    return sum;
}

console.log(sumOfMinimums([[2,4,5], [5,4,6], [1,5,8]]))