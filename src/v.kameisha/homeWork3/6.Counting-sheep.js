function countSheeps(arrayOfSheep) {
    let sum = 0;  
    for( let i = 0; i < arrayOfSheep.length; i++){
      if(arrayOfSheep[i] === true){
        sum++; 
      }
    }
    return sum;
  }
  console.log(countSheeps([true,true,false,true]));