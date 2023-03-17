function whoseBicycle(diary1, diary2, diary3) {

    let sum = 0
    for (const key in diary1) {
        sum += diary1[key]
    }
    return sum

}
console.log(whoseBicycle({
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
    },
    {
        'algebra': 8,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
    },
    {
        'algebra': 6,
        'history': 5,
        'physics': 5,
        'geography': 9,
        'chemistry': 10
    }))