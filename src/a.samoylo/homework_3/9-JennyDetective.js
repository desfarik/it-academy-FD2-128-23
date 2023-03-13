function missingWord(nums, str) {
    let total ='';
    let arr = nums.sort((a,b)=>a-b)
    let string = str.split(' ').join('')
    arr.map(el => total += string[el])
    return total.includes(undefined)? "No mission today" : total.toLowerCase();
  }