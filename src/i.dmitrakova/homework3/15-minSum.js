function minSumSeries(array){
    const sortedArray = array.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < sortedArray.length / 2; i++) {
      sum += sortedArray[i] * sortedArray.at(-i - 1);
    }
  
    return sum;
}
console.log(minSumSeries([5, 4, 2, 3]));