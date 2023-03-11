function join(array, separator) {
  let result = '' + array[0];
  for (let i = 1; i < array.length; i++) {
    result += separator + array[i];
  }
  return result;

}

console.log(join([1, 3, 4], '-'));

