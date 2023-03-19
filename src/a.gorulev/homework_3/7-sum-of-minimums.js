function sumOfMinimums(arr) {
  let result = 0;
  let temp = 0;
  for (let i=0; i<arr.length; i++) {
    temp = arr[i][0];
    for (let j=1; j<arr[i].length; j++) {
      if (temp > arr[i][j]) {
        temp = arr[i][j];
      }
    }
    result += temp;
  }
  return result;
}

sumOfMinimums( [[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]);