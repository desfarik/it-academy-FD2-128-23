function colourAssociation(array){
    let newArr = [];
    for(let i = 0; i < array.length; i++) {
      let newObj = {};
      let key = array[i][0];
      let value = array[i][1];
      newObj[key] = value;
      newArr.push(newObj);
    }
    return newArr;
  }
  console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]));