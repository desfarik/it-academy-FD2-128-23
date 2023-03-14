function missingWord(nums, str) {
    str = str.split(' ').join('').toLowerCase();
    let result = '';
    for (i = 0; i < str.length; i++) {
      if (nums.includes(i)) {
        result += str[i];
      }
    }
    if (result.length !== nums.length) {
     return 'No mission today'
    }
    return result
  }
    console.log(missingWord( [5, 0, 3], "I love you"))
    console.log(missingWord( [12, 4, 6], "Good Morning"))
  