function isEqual(array1, array2) {
/*  return array1.length === array2.length &&
    array1.every((item, index) => item === array2[index]);*/
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

console.log(isEqual([1, 2, 3], [1, 2, 3]));
console.log(isEqual([1, 2, 3, 4], [1, 2, 3]));
console.log(isEqual([1, 2, 3], [1, 2, 3, 4]));
console.log(isEqual([1, 2, 2, 3], [1, 2, 3, 4]));
