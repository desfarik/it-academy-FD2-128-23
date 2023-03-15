function takeLast(array, n) {
  const result = [];
  const index = array.length - n;
  for (let i = array.length - 1; i >= index; i--) {
    result.push(array[i]);
  }
  return result;
  //return result.slice(-n);
  //return array.slice(index);
}

console.log(takeLast([1, 2, 3, 4, 5], 2));
