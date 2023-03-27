function findMissing(firstArray, secondeArray) {
  firstArray = firstArray.sort();
  secondeArray = secondeArray.sort();
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] != secondeArray[i]) {
      return firstArray[i];
    }
  }
}
console.log(findMissing([1, 2, 3], [1, 3]));
