function reverseWords(str) {
    str = str.split("");
    let res = [];
    for (let i = 0; i < str.length; i++) {
        res.push ( str[i].split("").reverse().join(" "));
    }
    return res.reverse().join("");
    // return str.split("").reverse().join("");
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));