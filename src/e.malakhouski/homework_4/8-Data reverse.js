function dataReverse(data) {
  let result = chunk(data, 8).reverse();
  return result.flat(1);
}

function chunk(arr, size) {
  let newArray = [];

  for (let i = 0; i < arr.length / size; i++) {
    newArray.push(arr.slice(i * size, i * size + size));
  }

  return newArray;
}


console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));