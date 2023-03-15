function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++){
    if (arrayOfSheep[i] === true){
        count++;
    }  
  }
  return count
}
console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));

    // solve in one line
    // return arrayOfSheep.filter(Boolean).length