function trimStart(str){
    let index = 0;
    while(str[index] === ' '){
        index++
    }
    return str.slice(index)
}
function trimEnd(str){
    let index = str.length -1;
    while(str[index] === ' '){
        index--
    }
    return str.slice(0, index + 1)
}
function trim(str){
    str = trimStart(str);
    return trimEnd(str);

}
console.log(trimEnd('  user name '))//не работает