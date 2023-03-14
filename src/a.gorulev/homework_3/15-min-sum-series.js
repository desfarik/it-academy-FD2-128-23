function minSum(arr) {
  let amount = arr.length;
  let sum = 0;
  // обратная сортировка
  let sortNumbers = arr.sort((a,b)=>b-a);
  // умножение max на min (алгебраический минимум)
  for (let i = 0; i<amount/2; i++) {
    sum += sortNumbers[i] * sortNumbers[amount-i-1];
  }
  return sum;
}

minSum([1,2,3,4,5,9]);