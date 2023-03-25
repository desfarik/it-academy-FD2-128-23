function sentence(List) {
    let result = []
    let newArr = List.sort((a, b) => Object.keys(a) - Object.keys(b))
  
    for (let i = 0; i < newArr.length; i++) {
      let temp = Object.values(newArr[i])
      result.push(temp)
    }
    return result.join(' ')
  }

let List = [
    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
   ];

console.log(sentence(List));