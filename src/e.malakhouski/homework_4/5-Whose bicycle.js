function whoseBicycle(diary1, diary2, diary3) {
  if(sumMax(diary1) > sumMax(diary2) && sumMax(diary1) > sumMax(diary3)){
    return 'I need to buy a bicycle for my first son.'
  } else if (sumMax(diary2) > sumMax(diary1) && sumMax(diary2) > sumMax(diary3)) {
    return 'I need to buy a bicycle for my second son.'
  } else if (sumMax(diary3) > sumMax(diary1) && sumMax(diary3) > sumMax(diary2)) {
    return 'I need to buy a bicycle for my third son.'
  } else if (sumMax(diary1) === sumMax(diary3) || sumMax(diary2) === sumMax(diary3)) {
    return 'I need to buy a bicycle for my third son.'
  } else if (sumMax(diary2) === sumMax(diary1))  {
    return 'I need to buy a bicycle for my second son.'
  } 
}

//все работает, но не знаю как сделать меньше условий, чтобы код выглядел красиво 

function sumMax(object) {
  return Object.values(object).reduce((sum, i) => sum + i, 0);
}

console.log(
  whoseBicycle(
    {
      algebra: 3,
      history: 7,
      physics: 8,
      geography: 4,
      chemistry: 10,
    },
    {
      algebra: 6,
      history: 7,
      physics: 8,
      geography: 9,
      chemistry: 4,
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
