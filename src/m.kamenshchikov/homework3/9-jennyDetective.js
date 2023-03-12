function missingWord(nums, str) {
  let result = "";
  nums = nums.sort(function (a, b) {
    return a - b;
  });
  str = str.split(" ").join("").toLowerCase();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > str.length) {
      return "No mission today";
    }
    result += str[nums[i]];
  }
  return result;
}
console.log(missingWord([5, 0, 3], "I love you"));
