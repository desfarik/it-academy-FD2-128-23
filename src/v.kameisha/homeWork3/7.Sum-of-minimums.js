function sumOfMinimums(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
     total += Math.min(...arr[i])
    }
    return total;
  }
  console.log(sumOfMinimums([
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
  ]));