function missingWord(nums, str) {
    var result = ""
    var string = str.split(" ").join("")
    nums.sort((a, b) => a - b)
    nums.forEach(function (x) {
        if (string[x]) {
            result += string[x].toLowerCase()
        } else {
            result = "No mission today"
        }
    })
    return result;
}

console.log(missingWord([5, 0, 3], "I love you"))                                       //ivy
console.log(missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog"))    //bay
console.log(missingWord([12, 4, 6], "Good Morning"))                                    //No mission today