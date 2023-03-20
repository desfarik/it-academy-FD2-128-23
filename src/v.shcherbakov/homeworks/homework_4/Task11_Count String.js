function strCount(obj) {
    let result = 0;
    for (let key in obj) {
        if (typeof obj[key] === "string") result++;
        if (typeof obj[key] === "object") result += strCount(obj[key]);
    }
    return result;
}
console.log(
    strCount({
        first: "1",
        second: "2",
        third: false,
        fourth: ["anytime",2,3,4],
        fifth:  null
    })
);