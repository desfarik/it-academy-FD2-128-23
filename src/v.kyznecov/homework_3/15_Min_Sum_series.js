function minSum(arr) {
    let result=0;
    arr = arr.sort((a,b)=>a-b);
    while(arr.length){
     result += arr.pop()*arr.shift();
      }  return result
  }
  console.log(minSum([5,4,2,3]))
  console.log(minSum([12,6,10,26,3,24]))
  