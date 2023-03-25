function whoseBicycle(diary1, diary2, diary3) {
    let sum1 = 0, sum2 = 0, sum3 = 0;
    for (let key in diary1) {
      sum1 += diary1[key];
    }
    for (let key in diary2) {
      sum2 += diary2[key];
    }
    for (let key in diary3) {
      sum3 += diary3[key];
    }
    if (sum1 > sum2 && sum1 > sum3) {
      return 'I need to buy a bicycle for my first son.'
    }
    if (sum2 >= sum1 && sum2 > sum3) {
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
    }
  ));

console.log(whoseBicycle(
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
    }
  ));