function whoseBicycle(diary1, diary2, diary3) {
  const marks1 = Object.values(diary1).reduce(
    (mark, currentValue) => mark + currentValue
  );
  const marks2 = Object.values(diary2).reduce(
    (mark, currentValue) => mark + currentValue
  );
  const marks3 = Object.values(diary3).reduce(
    (mark, currentValue) => mark + currentValue
  );

  if (marks1 > marks2 && marks1 > marks3) {
    return "I need to buy a bicycle for my first son.";
  } else if (marks2 >= marks1 && marks2 > marks3) {
    return "I need to buy a bicycle for my second son.";
  } else if (marks3 >= marks1 && marks3 >= marks2) {
    return "I need to buy a bicycle for my third son.";
  }
}
console.log(
  whoseBicycle(
    {
      algebra: 6,
      history: 7,
      physics: 8,
      geography: 9,
      chemistry: 10,
    },
    {
      algebra: 8,
      history: 7,
      physics: 8,
      geography: 9,
      chemistry: 10,
    },
    {
      algebra: 6,
      history: 5,
      physics: 5,
      geography: 9,
      chemistry: 10,
    }
  )
);
