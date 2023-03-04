function ceil(num) {
  let str = `${num}`;
  let isFloat = str.includes('.');
  return isFloat ? parseInt(num + 1) : num;
}

function ceil2(num) {
  return Number.isInteger(num) ? num : parseInt(num + 1);
}

console.log(ceil(18.5));
console.log(ceil(18));
