function reverseWords(str) {
    return str
    .split(' ')
    .map (world => world.split('').reverse().join(''))
    .join(' ')
  }

  console.log(reverseWords('Hello world!'))

