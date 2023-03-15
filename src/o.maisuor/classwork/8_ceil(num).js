function ceil(num) {
   const str = `${num}`;
   const ifDrop = str.includes('.');
   return ifDrop ? parseInt(num + 1) : num;
}
console.log(ceil(18.5))
console.log(ceil(18))

