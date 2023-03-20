function whoseBicycle(diary1, diary2, diary3) {
    let maxSum = Math.max(sumMarks(diary1), sumMarks(diary2), sumMarks(diary3));
    if (sumMarks(diary3) === maxSum) {
        return 'I need to buy a bicycle for my third son.';
    } else if (sumMarks(diary2) === maxSum) {
        return 'I need to buy a bicycle for my second son.';
    } else {
        return 'I need to buy a bicycle for my first son.';
    }
    function sumMarks(marks) {

        let sum = 0;
        for (let key of Object.values(marks)) {
            sum += key;
        }

        return sum;
    }

}

const diary1 = {
    'algebra': 6,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
};
const diary2 = {
    'algebra': 8,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
};
const diary3 = {
    'algebra': 6,
    'history': 5,
    'physics': 5,
    'geography': 9,
    'chemistry': 10
};

console.log(whoseBicycle(diary1, diary2, diary3));