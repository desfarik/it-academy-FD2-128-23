function last(x){
    return x.split(' ').sort((a,b) => a.slice(-1).localeCompare(b.slice(-1)))
};

// В данном случае тесты выводят почему то false, хотя такие же тесты на Codewars выдают True, с чем это связанно к сожалению не знаю и не смог разобраться,
// поэтому просто сделал тесты с выводом моего решения, и правильного в строку, а с выводом true и false закоментил.

// console.log(last('man i need a taxi up to ubud') === ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
// console.log(last('what time are we climbing up the volcano') === ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
// console.log(last('take me to semynak') === ['take', 'me', 'semynak', 'to']);

console.log(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
console.log(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
console.log(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);