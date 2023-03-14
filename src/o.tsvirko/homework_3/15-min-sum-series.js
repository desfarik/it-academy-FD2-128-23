function minSum(arr) {
    let sum = 0;
    let sortedArr = arr.sort((a, b) => a - b);
    for (i = 0; i < sortedArr.length/2; i++) {
      let j = sortedArr.length - (i + 1);
      sum += sortedArr[i] * sortedArr[j];
    } 
return sum;
}
console.log(minSum([5,4,2,3]))