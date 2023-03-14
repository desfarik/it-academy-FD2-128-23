function add(num1, num2) {
  num1 = ("" + num1).split("").reverse();
  num2 = ("" + num2).split("").reverse();
  let max = Math.max(num1.length, num2.length);
  let str = [];
  for (let i = 0; i < max; i++)
    str.push((parseInt(num1[i]) || 0) + (parseInt(num2[i]) || 0));
  num1 = str.reverse().join("");
  return parseInt(num1);
  return num1 + num2;
}
console.log(add(16, 18))
console.log(add(26, 39))

