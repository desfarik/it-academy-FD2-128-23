function missingWord(nums, str) {
    let result = "";
    let string = str.split(" ").join("");
    nums.sort((a, b) => a - b);
    nums.forEach(function (x) {
        if (string[x]) {
            result += string[x].toLowerCase();
        } else {
            result = "No mission today";
        }
    });
    return result;
}

console.log(missingWord([5, 0, 3], "I love you"))