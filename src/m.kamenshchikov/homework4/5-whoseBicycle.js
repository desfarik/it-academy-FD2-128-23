function whoseBicycle(diary1, diary2, diary3) {
  let firstSon =
    diary1.algebra +
    diary1.history +
    diary1.physics +
    diary1.geography +
    diary1.chemistry;
  let secondSon =
    diary2.algebra +
    diary2.history +
    diary2.physics +
    diary2.geography +
    diary2.chemistry;
  let thirdSon =
    diary3.algebra +
    diary3.history +
    diary3.physics +
    diary3.geography +
    diary3.chemistry;
  let result = Math.max(firstSon, secondSon, thirdSon);
  if (result == firstSon) return "I need to buy a bicycle for my first son.";
  if (result == secondSon) return "I need to buy a bicycle for my second son.";
  if (result === thirdSon) return "I need to buy a bicycle for my third son.";
}
const diary1 = {
  algebra: 1,
  history: 2,
  physics: 3,
  geography: 4,
  chemistry: 5,
};
const diary2 = {
  algebra: 6,
  history: 7,
  physics: 8,
  geography: 9,
  chemistry: 10,
};
const diary3 = {
  algebra: 9,
  history: 8,
  physics: 7,
  geography: 6,
  chemistry: 5,
};
console.log(whoseBicycle(diary1, diary2, diary3));
