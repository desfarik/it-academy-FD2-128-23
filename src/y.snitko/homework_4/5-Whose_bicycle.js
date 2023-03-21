function whoseBicycle(diary1, diary2, diary3) {
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  for (let key in diary3) {
    sum3 += diary3[key];
  }
  for (let key in diary2) {
    sum2 += diary2[key];
  }

  for (let key in diary1) {
    sum1 += diary1[key];
  }

  if (sum3 >= sum1 && sum3 >= sum2) {
    return 'I need to buy a bicycle for my third son.';
  } else if (sum2 >= sum1 && sum2 > sum3) {
    return 'I need to buy a bicycle for my second son.';
  } else {
    return 'I need to buy a bicycle for my first son.';
  }
}

console.log(
  whoseBicycle(
    {
      algebra: 3,
      history: 70,
      physics: 8,
      geography: 50,
      chemistry: 5,
    },
    {
      algebra: 10,
      history: 0,
      physics: 0,
      geography: 10000,
      chemistry: 10,
    },
    {
      algebra: 9,
      history: 7,
      physics: 9,
      geography: 9,
      chemistry: 10,
    }
  )
);
