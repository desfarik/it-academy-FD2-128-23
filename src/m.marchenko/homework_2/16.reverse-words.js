function reverseWords(str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ');
}


console.log(reverseWords('This is homework'));
console.log(reverseWords('Apple Ball Car Dice Eat Freeze Gym Horse'))