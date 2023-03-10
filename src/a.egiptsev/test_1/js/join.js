function join(array, separator) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      result += array[i] + separator;
    } else {
      return (result += array[i]);
    }
  }
  return result;
}
console.log(join([1, 2, 3], "-"));
