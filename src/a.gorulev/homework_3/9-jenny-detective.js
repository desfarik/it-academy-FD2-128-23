function missingWord(nums, str) {
  // удаление пробелов
  str=str.replace(/[^\w]/g,'');
  // сортировка для цикла
  let arr=nums.sort((a,b)=>a-b);
  let arr1=[];
  for (let i=0;i<arr.length;i++) {
    arr1.push(str[arr[i]])
  }
  return arr1.includes(undefined) ? "No mission today" : 
  arr1.join('').toLowerCase();
}

missingWord([0,7,15], 'pretty cold in the garden');