function toCamelCase(str) {
    let words = getWords(str.toLowerCase());
    for(let i = 0; i< words.length; i++){
        words = words.toLowerCase()
    }
    let result = words[0];
    for(let i=1; i<words.length; i++){
        let word = words[i];
        word = word[0].toUpperCase() + word.slice(1)
        result += word;
    }
    return result;
}


  function getWords(str){
    const array = [];
    let temp = '';
    const dividers = ' -_'
    for(let i = 0; i<str.length; i++){
        let symb = str[i];//равен текущему эл
        if(dividers.includes(symb)){
            if(temp){ //если там будет пустая строка, то это false, то он никогда не запустится

            
            array.push(temp);
            temp='';
        }
        }else{
            temp += symb;
        }
    }
    if(temp != ''){
        array.push(temp);
    }
    return array;
  }
  console.log(toCamelCase(' user  Name-Victor'))