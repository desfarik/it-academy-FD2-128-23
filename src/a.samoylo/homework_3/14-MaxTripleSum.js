function maxTriSum(numbers){
    return ([...new Set(numbers)]).sort((a,b) => a-b).slice(-3).reduce((a,b) => a+b);
  }