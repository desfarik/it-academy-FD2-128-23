function whoseBicycle(diary1, diary2, diary3) {
    let newDiary1 = Object.values(diary1).reduce((acc, number) => acc + number, 0);
    let newDiary2 = Object.values(diary2).reduce((acc, number) => acc + number, 0);
    let newDiary3 = Object.values(diary3).reduce((acc, number) => acc + number, 0);

    if (newDiary1 > newDiary2 && newDiary1 > newDiary3) {
        return 'I need to buy a bicycle for my first son.';
    } else if (newDiary2 >= newDiary1 && newDiary2 > newDiary3) {
        return 'I need to buy a bicycle for my second son.';
    } else if (newDiary3 >= newDiary1 && newDiary3 >= newDiary2) {
        return 'I need to buy a bicycle for my third son.';
    }
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