function indexOf(str, symb, pos = 0){
    for(let i = pos; i <str.length; i++){
        if(str[i] === symb){
            return i;
        }
    }
    return -1;
}
function allIndexOf(str, symb, pos = 0){
    let array = [];
    for(let i = pos; i <str.length; i++){
        if(str[0] === symb){
            array.push(i);
        }
}
return array
}
alert(indexOf('user name', 'a', 3))