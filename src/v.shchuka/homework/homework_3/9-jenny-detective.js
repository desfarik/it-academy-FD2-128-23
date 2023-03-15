function missingWord(nums, str) {
  let result = "";
  const arrStr = str.split(" ").join("");
  const numSort = nums.sort((a, b) => a - b);
  for (const num of numSort) {
    const symb = arrStr[num];
    if (symb === undefined) {
      result = "No mission today";
    } else {
      result += symb.toLowerCase();
    }
  }
  return result;
}
console.log(
  missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog")
);
