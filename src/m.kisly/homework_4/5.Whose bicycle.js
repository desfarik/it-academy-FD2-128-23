function whoseBicycle(diary1, diary2, diary3) {
    let son1 = 0
    let son2 = 0
    let son3 = 0
    for (let key in diary1) {
        son1 += diary1[key]
    }
    for (let key in diary2) {
        son2 += diary2[key]
    }
    for (let key in diary3) {
        son3 += diary3[key]
    }   
    if (son1 > son2 && son1 > son3) {
        return 'I need to buy a bicycle for my first son.'
    } else if (son2 >= son1 && son2 > son3) {
        return 'I need to buy a bicycle for my second son.'
    }
    return 'I need to buy a bicycle for my third son.'
}

console.log(whoseBicycle(
    {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10,
    },
    {
        'algebra': 8,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10,
    },
    {
        'algebra': 6,
        'history': 5,
        'physics': 5,
        'geography': 9,
        'chemistry': 10,
    }
), 'I need to buy a bicycle for my second son.');

console.log(whoseBicycle(
    {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10,
    },
    {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10,
    },
    {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10,
    }
), 'I need to buy a bicycle for my third son.');

console.log(whoseBicycle(
    {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 5,
    },
    {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10,
    },
    {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10,
    }
), 'I need to buy a bicycle for my third son.');

console.log(whoseBicycle(
    {
        'algebra': 3,
        'history': 7,
        'physics': 8,
        'geography': 4,
        'chemistry': 10,
    },
    {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 4,
    },
    {
        'algebra': 9,
        'history': 7,
        'physics': 9,
        'geography': 9,
        'chemistry': 10,
    }
), 'I need to buy a bicycle for my third son.');