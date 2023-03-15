function add(num1, num2 = 0) {
  const str1 = `${num1}`;
  const str2 = `${num2}`;
  const max = Math.max(str1.length, str2.length);
  let result = [];
  let sum;
  for (let i = 1; i <= max; i++) {
    if (str2.at(-i) === undefined) {
      sum = getNum(str1, i);
    } else if (str1.at(-i) === undefined) {
      sum = getNum(str2, i);
    } else {
      sum = getNum(str1, i) + getNum(str2, i);
    }
    result.unshift(sum);
  }
  return +result.join("");
  function getNum(str, i) {
    return +str.at(-i);
  }
}
console.log(add(122, 81));
