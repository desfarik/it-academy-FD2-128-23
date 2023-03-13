function maxTriSum(numbers){
    let sorting = numbers.sort((a, b) => b - a);
    let result = [...new Set(sorting)]
     return result[0] + result[1] + result[2]
   }
   
   console.log(maxTriSum([3,2,6,8,2,3]))
   console.log(maxTriSum([2,9,13,10,5,2,9,5]))
   