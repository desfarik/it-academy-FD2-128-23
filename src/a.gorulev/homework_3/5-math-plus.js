function add(num1, num2) {
  let digits1 = String(num1).split('').map(Number);
  let digits2 = String(num2).split('').map(Number);
  let sum = [];

  // добаление нулей перед меньшим числом от сдвига
  while (digits1.length < digits2.length) {
    digits1.unshift(0);
  } while (digits2.length < digits1.length) {
    digits2.unshift(0);
  }
  for (let i=0; i<=digits1.length-1; i++) {
    sum.push(digits1[i] + digits2[i]);
  }

  return Number(sum.join(''));
}

add(1958, 251);