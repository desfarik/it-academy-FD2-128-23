function sumOfMin(array) {
    let result = 0;
  
    for (let i = 0; i < array.length; i++) {
      result += Math.min(...array[i]);
    }
  
    return result;
  }
  console.log(sumOfMin([
      [1, 2, 3, 4, 5],
      [5, 6, 7, 8, 9],
      [20, 21, 34, 56, 100],])
  );