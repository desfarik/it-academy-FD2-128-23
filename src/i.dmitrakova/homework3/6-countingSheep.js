function countingSheep(array){
    numberSheep = 0;
    for(let i =0; i <array.length; i++){
    if (array[i] === true){
        numberSheep++;
    }
}
return numberSheep;
}
console.log(countingSheep([true, false, true]))

