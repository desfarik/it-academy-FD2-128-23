function reverseWords(str) {
  let array = str.split(" ");
  let array2 = [];
  for (let i = 0; i < array.length; i++) {
    array2.push(array[i].split("").reverse().join(""));
  }

  return array2.join(" ");
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));