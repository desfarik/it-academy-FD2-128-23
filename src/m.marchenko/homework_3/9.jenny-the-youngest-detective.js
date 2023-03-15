function missingWord(nums, str) {
  let code = '';
  nums = nums.sort((x, y) => x - y);
  str = str.split(' ').join('').toLowerCase();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > str.length) {
      return 'No mission today'
    }
    code += str[nums[i]]
  }
  return code
}

console.log(missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog"));
console.log(missingWord([12, 4, 6], "Good Morning"));