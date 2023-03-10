function removeItem(array, index) {
  array.splice(index, 1);
  return array;
}
console.log(removeItem([1, 2, 3, 4, 5], 2));
