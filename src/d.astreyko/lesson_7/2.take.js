function take(array, n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(array[i]);
  }
  return result;
  // return result.slice(0 , n);
}

console.log(take([1, 2, 3, 4, 5], 2));
