function add(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();

  let sum = "";

  const max = Math.max(str2.length, str1.length);
  str1 = str1.padStart(max, "0");
  str2 = str2.padStart(max, "0");

  for (let i = 0; i < str1.length; i++) {
    let strSum = parseInt(str1[i]) + parseInt(str2[i]);

    sum += strSum;
  }

  return parseInt(sum);
}
console.log(add(248, 208));
