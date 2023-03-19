function oddEven(s){
    let indexOdd = '';
    let indexEven = '';
    for(let i = 0; i < s.length; i++){
        if(i % 2 === 0){
            indexOdd += s[i];
        } else{
            indexEven += s[i];}
    }
    return indexOdd + ' ' + indexEven;
}
console.log(oddEven('Freedom'))