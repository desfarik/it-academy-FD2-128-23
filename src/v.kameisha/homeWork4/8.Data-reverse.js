function dataReverse(data) {
    let result = [];
    for (let i = 0; i < data.length; i+= 8) {
      let newArr = data.slice(i, i + 8);
      result.push(newArr);
    }
    return result.reverse().flat();
  }
  
  console.log(
    dataReverse([
      1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
      0, 1, 0, 1, 0, 1, 0,
    ])
  );