function sumOfMinimums(arr) {
    let total=0;
    for (let i=0;i<arr.length; i++){
     total += Math.min(...arr[i])
    }
    return total;
  }