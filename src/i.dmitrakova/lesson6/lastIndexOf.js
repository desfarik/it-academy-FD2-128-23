function lastindexOf(str, symb, pos = 0){
    for(let i = str.length-1; i >= 0; i--){
        if(str[i] === symb){
            return i;
        }
    }
    return -1;
}
console.log(lastindexOf('user name', 'e'))