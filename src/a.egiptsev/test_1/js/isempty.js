function isEmpty(array) {
  if (array.length == 0) {
    return (isEmpty = true);
  } else {
    return (isEmpty = false);
  }
}
console.log(isEmpty(""));

function isEmpty(array) {
  return array.length === 0;
}
console.log(isEmpty([]));
