function sentence(list) {
    let sentence = '';
    let sorted = [];
    let newList = {};
    for (let i = 0; i < list.length; i++){
        Object.assign(newList,list[i])
    }
    sorted = Object.entries(newList).sort((a,b) => a[0] - b[0])
    for(let i = 0; i < sorted.length; i++){
        if(i === sorted.lengt - 1){
            sentence += sorted[i][1]
        }else{
            sentence += sorted[i][1] + ' '
        } 
    }
    return sentence
    
  }

  const list = [
    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
   ];
console.log(sentence(list))