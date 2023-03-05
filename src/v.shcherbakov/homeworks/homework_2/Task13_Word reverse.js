function reverseWords(str) {

    str = str.split(" ");

    let Arr = [];

    for (let i = 0; i < str.length; i++) {
        Arr.push(str[i].split("").reverse().join(""));
    }

    return Arr.join(" ");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));