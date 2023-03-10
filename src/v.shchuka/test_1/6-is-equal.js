function isEqual(array1, array2) {
  if (array1.lenght !== array2.lenght) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] != array2[i]) {
        return false;
      }
    }
    return true;
  }
}
const array1 = [2, 3, 4, 3];
const array2 = [2, 3, 4, 3];
console.log(isEqual(array1, array2));
