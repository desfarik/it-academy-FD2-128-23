function indexOf(str, symb, pos = 0){
    for (let i = pos; i <str.length; i++){
        let potential = str.slice(i, i+symb.length)
        if(potential === symb){
            return i;
        }
    }
    return -1;
}
alert(indexOf('user name', 'er'))

//цикл в цикле