function minSum(arr) {
  let sumOfMinimun = 0;
  let tempArray = arr.slice();
  for (let i = 0; i < arr.length / 2; i++) {
    let max = tempArray.reduce((a, b) => Math.max(a, b));
    tempArray.splice(tempArray.indexOf(max), 1);

    let min = tempArray.reduce((a, b) => Math.min(a, b));
    tempArray.splice(tempArray.indexOf(min), 1);
    
    sumOfMinimun += max * min;
  }
  return sumOfMinimun;
}


console.log(minSum([9,2,8,7,5,4,0,6]));