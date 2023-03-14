function missingWord(nums, str) {
  nums = nums.sort((a, b) => a - b);
  str = str.split(" ").join("").toLowerCase();
  let text = "";
  for (let i = 0; i < nums.length; i++) {
    if (str.length < nums[i]) {
      return "No mission today";
    }
    text += str[nums[i]];
  }
  return text;
}

console.log(
  missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog")
);
console.log(missingWord([12, 4, 6], "Good Morning"));
