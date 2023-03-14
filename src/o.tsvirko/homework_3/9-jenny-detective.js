function missingWord(nums, str) {
    str = str.split(' ').join('').toLowerCase();
    let word = '';
    for (i = 0; i < str.length; i++) {
      if (nums.includes(i)) {
        word += str[i];
      }
    }
    if (word.length !== nums.length) {
      return 'No mission today'
    }
    return word
}
console.log(missingWord([3,6,7], 'dFb efGh iGZBkmd'))