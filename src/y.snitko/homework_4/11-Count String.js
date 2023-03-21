function strCount(obj) {
  // let result = [];
  // let array = Object.values(obj).flat();
  // for (let i = 0; i < array.length; i++) {
  //   if (typeof array[i] === 'string') {
  //     result.push(array[i]);
  //   }
  // }
  // return result.length;
  //или рекурсия
  let count = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      count++;
    }
    if (typeof obj[key] === 'object') {
      count += strCount(obj[key]);
    }
  }
  return count;
}

console.log(
  strCount({
    first: '1',
    second: '2',
    third: false,
    fourth: ['anytime', 2, 3, 4],
    fifth: null,
  })
);
