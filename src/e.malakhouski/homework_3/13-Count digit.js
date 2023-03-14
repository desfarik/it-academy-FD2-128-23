function nbDig(n, d) {
  let numbers = [];
  let count = 0;
  for (let i = 0; i <= n; i++) {
    numbers.push(i);
  }

  numbersSquare = numbers.map((item) => String(item ** 2));
  
  for (let i = 0; i < numbersSquare.length; i++) {
    let temp = numbersSquare[i].split("");
    for (let num of temp) {
      if (+num === d) {
        count++;
      }
    }
  }
  return count;
}



console.log(nbDig(5750, 0));
