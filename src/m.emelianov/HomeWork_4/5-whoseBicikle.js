function whoseBicycle(diary1, diary2, diary3) { 
    let avgMark1 = Object.values(diary1).reduce((a,b) => a + b)  
    let avgMark2 =Object.values(diary2).reduce((a,b) => a + b)
    let avgMark3 = Object.values(diary3).reduce((a,b) => a + b) 
    if (avgMark1 > avgMark2 && avgMark1 > avgMark3){
      return 'I need to buy a bicycle for my first son.'
    } else if (avgMark2 >= avgMark1 && avgMark2 > avgMark3){
      return 'I need to buy a bicycle for my second son.'
    }else if (avgMark3 >= avgMark1 && avgMark3 >= avgMark2){
      return 'I need to buy a bicycle for my third son.'
    }
  } 
  const diary1 = {
    'algebra': 6,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
  }
  const diary2 = {
    'algebra': 8,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
  }

  const diary3 = {
    'algebra': 6,
    'history': 5,
    'physics': 5,
    'geography': 9,
    'chemistry': 10
  }
  const ageTable = {
    'firstSonAge': 14,
    'secondSonAge': 9,
    'thirdSonAge': 8
  }
  
  console.log(whoseBicycle(diary1, diary2, diary3))



   