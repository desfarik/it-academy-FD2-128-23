function whoseBicycle(diary1, diary2, diary3) {
    const ageTable = {
                    'firstSonAge': 14,
                    'secondSonAge': 9,
                    'thirdSonAge': 8
                  };
let sum1 = 0;
for (const key in diary1) {
  sum1 += diary1[key];
}
let sum2 = 0;
for (const key in diary2) {
sum2 += diary2[key];
}
let sum3 = 0;
for (const key in diary3) {
  sum3 += diary3[key];
}
let maxRezult = Math.max(sum1, sum2, sum3);
let sons = [ {'ball': sum1, 'age': ageTable.firstSonAge, son: 'first',},
                { 'ball': sum2, 'age': ageTable.secondSonAge, son: 'second',},
                { 'ball': sum3, 'age': ageTable.thirdSonAge, son: 'third', } ];
let best = sons.filter(value => value.ball == maxRezult).sort((a, b) => a.age - b.age );
    return `I need to buy a bicycle for my ${best[0].son} son.`
  }
  let diary1= {
                 'algebra': 6,
                'history': 7,
                'physics': 8,
                 'geography': 9,
                 'chemistry': 10
                                  }
 let diary2= {
                 'algebra': 8,
                 'history': 7,
                 'physics': 8,
                 'geography': 9,
                  'chemistry': 10
                                  }
  let diary3= {
                  'algebra': 6,
                  'history': 5,
                   'physics': 5,
                  'geography': 9,
                   'chemistry': 10
                                  }
                                  
  console.log(whoseBicycle(diary1, diary2, diary3))   
  
  
  
  
 let diary1_1= {
    'algebra': 6,
    'history': 7,
     'physics': 8,
     'geography': 9,
    'chemistry': 10
                     }
 let diary2_2=  {
     'algebra':6,
    'history': 7,
     'physics': 8,
    'geography': 9,
    'chemistry': 10
                     } 
  let diary3_3= {
     'algebra': 6,
      'history': 7,
    'physics': 8,
     'geography': 9,
     'chemistry': 10
                      }
   console.log(whoseBicycle(diary1_1, diary2_2, diary3_3)) 