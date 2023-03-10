function countLetter(str){   
    str =str.replace(/[aeiou ]/gi, '');
    return str.length;  
}
alert(countLetter('weer ter'))