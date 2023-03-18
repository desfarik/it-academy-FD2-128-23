function sentence(List) {
  let result = "";

  let tempObj = {};
  for (let item of List) {
    Object.assign(tempObj, item);
  }
  let array = Object.entries(tempObj).sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      result += array[i][1];
    } else {
      result += array[i][1] + " ";
    }
  }
  return result;
}

console.log(
  sentence([
    {'4': 'dog' },
    {'2': 'took'},
    {'3': 'his'}, 
    {'-2': 'Vatsan'},
    {'5': 'for'},
    {'6': 'a'},
    {'12': 'spin'} 
   ])
);
