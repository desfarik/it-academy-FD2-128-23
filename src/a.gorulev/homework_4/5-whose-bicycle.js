function whoseBicycle(diary1, diary2, diary3) {
  function sumMarks(diary) {
    return Object.values(diary).reduce((a, b)=> a + b, 0);
  }
  let arrayMark = [sumMarks(diary1), sumMarks(diary2), sumMarks(diary3)];
  let index= arrayMark.lastIndexOf(Math.max(...arrayMark));
  return `I need to buy a bicycle for my ${index===0?'first':index===1?'second':'third'} son.`
}

whoseBicycle(
  {
    'algebra': 6,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
  },
  {
    'algebra':6,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
  },
  {
    'algebra': 6,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
  })