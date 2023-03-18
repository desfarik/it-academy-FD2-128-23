function whoseBicycle(diary1, diary2, diary3) {
  const max = Math.max(getSum(diary1), getSum(diary2), getSum(diary3));
  if (getSum(diary3) === max) {
    return "I need to buy a bicycle for my third son.";
  } else if (getSum(diary2) === max) {
    return "I need to buy a bicycle for my second son.";
  } else {
    return "I need to buy a bicycle for my first son.";
  }
  function getSum(diary) {
    return Object.values(diary).reduce((sum, num) => sum + num, 0);
  }
}
const diary1 = {
  algebra: 2,
  history: 7,
  physics: 8,
  geography: 9,
  chemistry: 10,
};
const diary2 = {
  algebra: 2,
  history: 7,
  physics: 8,
  geography: 9,
  chemistry: 10,
};
const diary3 = {
  algebra: 2,
  history: 7,
  physics: 8,
  geography: 9,
  chemistry: 10,
};
const ageTable = {
  firstSonAge: 14,
  secondSonAge: 9,
  thirdSonAge: 8,
};
console.log(whoseBicycle(diary1, diary2, diary3));
