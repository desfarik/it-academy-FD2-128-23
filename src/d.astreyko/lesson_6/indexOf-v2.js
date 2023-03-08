function indexOf (str,symb,pos=0){
  for (let i = pos; i <str.length ; i++) {
    let potential = str.slice(i,i+ symb.length);
    console.log(potential);
    if (potential=== symb){
      return i
    }
  }
return -1
}

console.log(indexOf('user name','me',))
