function sumOfMinimums(arr) {
  let output = 0;
  for (let i = 0; i < arr.length; i++) {
    output += Math.min(...arr[i]);
  }
  return output;
}
