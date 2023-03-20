function filterEven(array) {
  array.forEach(function (item, index, arr){
    console.log(index,item, arr);
  })
  array.forEach((item, index, arr) => {
    console.log(index,item, arr);
  })
//const arrayX2 = array.map(item => item * 2)
  const arrayX2 = array.map(function (item, index, arr){
    return item * 2
  })
  console.log(arrayX2);
// array.flatMap()
  const evens = array.filter(function (item, index, arr){
    return item % 2 === 0
  })
  console.log(evens);
    const allEvery = evens.every(function (item, index, arr){
      return item % 2 === 0
    })
  console.log(allEvery);
   // array.some()
  /*   array.reduce()*/
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result.push(array[i]);
    }
  }
  return result;
  console.log(result);
}

console.log(filterEven([1,4,8,9]));
