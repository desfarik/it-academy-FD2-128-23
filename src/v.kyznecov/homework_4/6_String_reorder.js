
function sentence(List) {
  let newList = List.sort((a, b) => Object.keys(a) - Object.keys(b));
  let res = newList.map((el) => Object.values(el));
  return res.join(" ");
}
let List = [
            {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
            {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
           ];
console.log(sentence(List)) 