function countSheeps(arrayOfSheep) {
    let total=0;
    for (let i=0; i< arrayOfSheep.length; i++){
      arrayOfSheep[i] ? total++ : ''
    }
    return total;
  }