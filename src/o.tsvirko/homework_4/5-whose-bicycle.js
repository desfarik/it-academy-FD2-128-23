function whoseBicycle(diary1, diary2, diary3) {
  
    let sum1 = sumOfMarks(diary1);
    let sum2 = sumOfMarks(diary2);
    let sum3 = sumOfMarks(diary3);
    function sumOfMarks(diary) {
        let sum = 0;
        for (let mark of Object.values(diary)) {
        sum += mark;
      }
      return sum;
  }
    let highestMarks = Math.max(sum1, sum2, sum3)
    if (highestMarks === sum3) {
      return 'I need to buy a bicycle for my third son.';
    }
    if (highestMarks === sum2) {
      return 'I need to buy a bicycle for my second son.';
    }
    if (highestMarks === sum1) {
      return 'I need to buy a bicycle for my first son.';
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