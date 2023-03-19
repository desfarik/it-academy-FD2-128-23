function sentence(List) {
    let sortedList = List.sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0]);
    let arr = [];
    for (let key of sortedList) {
       arr.push(Object.values(key))
     }
    return arr.join(' ');
}
console.log(sentence([
    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
   ]))