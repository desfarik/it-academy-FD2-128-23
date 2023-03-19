function strCount(obj) {
    let counter = 0
    for (key in obj) {
        if (typeof obj[key] === 'string') {
            counter++
        }
        if (typeof obj[key] === 'object') {
            counter += strCount(obj[key])
        }
    }
    return counter
}

console.log(strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null,
    sixth: undefined,
    seventh: {}
}))