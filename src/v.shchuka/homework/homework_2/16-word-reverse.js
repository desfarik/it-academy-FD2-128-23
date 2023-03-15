function reverseWords(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    arr[i] = word.split("").reverse().join("");
  }
  return arr.join(" ");
}
console.log(reverseWords("apple hello"));
