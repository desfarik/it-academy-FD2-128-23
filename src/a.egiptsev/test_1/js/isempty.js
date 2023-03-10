function isEmpty(array) {
  if (array.length == 0) {
    return (isEmpty = true);
  } else {
    return (isEmpty = false);
  }
}
console.log(isEmpty(""));
