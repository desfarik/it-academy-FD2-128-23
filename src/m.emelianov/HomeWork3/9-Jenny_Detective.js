function missingWord(nums, str) {       //здесь всё работает, но codewars не пропустил  , пишет что вместо 'eeear' ожидал 'ear'
    let codeWord = '';
    nums.sort((a,b) => a-b)[0]
    str = str.split(' ').join('').toLowerCase();
    for(let i = 0; i < nums.length; i++){
        for (let q = 0; q < str.length; q++){
            let symbol = str[q];    
            if(str.indexOf(symbol) === nums[i] ){
                codeWord += symbol;     
            }
            else if (str.indexOf(str.at(-1)) < nums[i] ){
                return '"No mission today"'
            }  
        }
    }
    return codeWord  
  }

  console.log(missingWord([5, 0, 3], "I love you"))
  console.log(missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog"))
  console.log(missingWord([12, 4, 6], "Good Morning"))