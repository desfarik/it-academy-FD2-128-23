function reverseWords(str) {
    return str.split(" ").map(
        function (a) { return a.split("").reverse().join("") }
    ).join(" ");
}
