function solution(str, ending){
  // TODO: complete
  if (str.endsWith(ending)){
    return(true);
  }else {
    return(false);
  }
}

console.log(solution('good', 'od'))
console.log(solution('father', 're'))
console.log(solution('things', '5'))