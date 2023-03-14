function maxTriSum(numbers){
    numbers = numbers.sort((a,b) => a-b).filter(function(item, pos) {
        return numbers.indexOf(item) == pos;
    })
    return numbers.slice(-3).reduce((a,b) => a+b)
  }
  console.log(maxTriSum([-13,-50,57,13,67,-13,57,108,67]))
  console.log(maxTriSum([-7,12,-7,29,-5,0,-7,0,0,29]))
  console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4]))