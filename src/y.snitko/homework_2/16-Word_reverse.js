function reverseWords(str) {
  return(str.split('').reverse().join('').split(' ').reverse().join(' '));
}

console.log(reverseWords('4566 number'));
console.log(reverseWords('i love js'));
