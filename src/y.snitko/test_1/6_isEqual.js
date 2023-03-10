function isEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let index = 0; index < array1.length; index++) {
      if (array1[index] !== array2[index]) {
        return false;
      } else {
        return true;
      }
    }
  }
}

console.log(isEqual([1, 3, 7], [1, 3, 7]));
