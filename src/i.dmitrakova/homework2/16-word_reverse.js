function someStr(str){

    str = str.split("").reverse().join("").split(" ").reverse().join(" ") ;
    return str;
}
alert(someStr('weer ter'))