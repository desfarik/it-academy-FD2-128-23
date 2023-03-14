function oddEvenSort(str){
    let arrayOdd = [];
    let arrayEven = [];
    let temp = '';
    let count = -1;
    for (let i = 0; i < str.length; i++){
        let symb = str [i];
        count ++;
        if (count % 2 === 0){
            temp += symb
            arrayEven.push(temp);
            temp = '';
        } else if (count % 2 !== 0){
            temp += symb
            arrayOdd.push(temp);
            temp = '';    
        } 
    }
    return arrayEven.join('') + ' ' + arrayOdd.join('')
}
console.log(oddEvenSort('CodeWars'))
console.log(oddEvenSort('YCOLUE\'VREER'))