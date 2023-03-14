function minSum(arr) {
    let arrayMinMax = [];
    arr = arr.sort((a,b) => a-b)
    for (let i = 0; i < arr.length/2; i++){
       arrayMinMax.push(arr[i] * arr[arr.length - 1 - i]) 
    }
    return arrayMinMax.reduce((a,b) => a+b)
  }
  console.log(minSum([5,4,2,3]))
  console.log(minSum([12,6,10,26,3,24]))
  console.log(minSum([9,2,8,7,5,4,0,6]))