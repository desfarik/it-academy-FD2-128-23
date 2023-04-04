function whoseBicycle(diary1, diary2, diary3){
    let diarySon1 = Object.values(diary1).reduce((a, b) => a + b);
    let diarySon2 = Object.values(diary2).reduce((a, b) => a + b);
    let diarySon3 = Object.values(diary3).reduce((a, b) => a + b);
    let maxSum = Math.max(diarySon1, diarySon2, diarySon3);
    if (maxSum === diarySon1) {
        return 'I need to buy a bicycle for my third son.';
      } else if (maxSum === diarySon2) {
        return 'I need to buy a bicycle for my second son.';
      } else if (maxSum === diarySon3) {
        return 'I need to buy a bicycle for my first son.';
      }
      return maxSum;
}
console.log(whoseBicycle(
    {
    algebra: 3,
      history: 10,
      physics: 5,
      geography: 7,
      chemistry: 10,
},
{
    algebra: 5,
      history: 8,
      physics: 3,
      geography: 9,
      chemistry: 10,
},
{
    algebra: 8,
      history: 6,
      physics: 9,
      geography: 5,
      chemistry: 9,
}
));